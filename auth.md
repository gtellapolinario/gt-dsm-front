Perfeito — com **TanStack Router + TanStack Query** e com a área logada já encapsulada em `src/routes/app.tsx` + `WorkspaceShell`, o desenho ideal é usar o Query para a sessão (`/auth/me`), usar mutations para login/logout/register e fazer o bloqueio da área privada no próprio route group com `beforeLoad` ou checagem via contexto do router. O Router suporta rotas autenticadas por `beforeLoad`, e o Query se encaixa bem para invalidar/refetch da sessão após login e logout. [tanstack](https://tanstack.com/router/latest/docs/guide/authenticated-routes)

## Estrutura

Eu montaria os arquivos assim, sem inventar um contexto pesado desnecessário, porque o próprio TanStack Query já pode ser a fonte de verdade do usuário autenticado. [reddit](https://www.reddit.com/r/react/comments/1jyu8uq/ui_doesnt_get_updated_properly_on_login_and_logut/)

- `src/api/http.ts`
- `src/api/auth.ts`
- `src/features/auth/auth-query.ts`
- `src/features/auth/use-auth.ts`
- `src/routes/app.tsx`
- `src/routes/login.tsx`
- `src/routes/__root.tsx` ou onde você cria o router/context

Se você quiser manter ergonomia de consumo, dá para ter um hook `useAuth()` que apenas lê a query `auth/me` e expõe mutations. Isso fica mais limpo do que duplicar estado em React Context. [github](https://github.com/TanStack/query/discussions/3253)

## Base da sessão

A ideia principal é:

- `useCurrentUserQuery()` chama `GET /auth/me`
- `useLoginMutation()` chama `POST /auth/login`
- no `onSuccess`, salva token em memória se existir e faz `queryClient.setQueryData` ou `invalidateQueries`
- `useLogoutMutation()` chama `POST /auth/logout` e limpa a query do usuário
- `src/routes/app.tsx` barra acesso se não houver sessão válida [tanstack](https://tanstack.com/router/latest/docs/api/router/redirectFunction)

## `http.ts`

Se o backend Python usa cookie HttpOnly, `withCredentials: true` é obrigatório para o browser enviar cookies cross-origin; se também devolver `token`, você pode guardar só em memória e anexar no header via interceptor. [dev](https://dev.to/hugo__df/pass-cookies-with-axios-or-fetch-requests-5881)

```ts
// src/api/http.ts
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error("VITE_API_URL não definida");
}

let accessToken: string | null = null;

export function setAccessToken(token: string | null) {
  accessToken = token;
}

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export function extractApiError(error: unknown, fallback: string) {
  if (typeof error === "object" && error && "response" in error) {
    const axiosError = error as {
      response?: {
        data?: {
          detail?: string | { message?: string; error_code?: string };
          message?: string;
        };
      };
    };

    const detail = axiosError.response?.data?.detail;

    if (typeof detail === "string") return detail;
    if (typeof detail === "object" && detail?.message) return detail.message;
    if (axiosError.response?.data?.message) return axiosError.response.data.message;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}
```

## `auth.ts`

Aqui eu manteria praticamente o contrato que você já usa no tarot, porque ele já está correto para frontend conversando com backend Python.

```ts
// src/api/auth.ts
import { apiClient, extractApiError } from "./http";

export class AuthApiError extends Error {
  status?: number;
  errorCode?: string;

  constructor(message: string, options?: { status?: number; errorCode?: string }) {
    super(message);
    this.name = "AuthApiError";
    this.status = options?.status;
    this.errorCode = options?.errorCode;
  }
}

export type AuthUser = {
  id: string;
  name?: string | null;
  email: string;
  avatar?: string | null;
  email_visibility: boolean;
  verified: boolean;
  coins?: number;
  is_admin?: boolean;
  role?: string;
  is_blocked?: boolean;
  blocked_reason?: string | null;
  created?: string | null;
  updated?: string | null;
};

export type AuthSessionResponse = {
  provider: string;
  token: string;
  user: AuthUser;
  expires_in?: number | null;
  expires_at?: string | null;
};

export type AuthRegisterResponse = {
  provider: string;
  user: AuthUser;
  verification_requested: boolean;
  message: string;
};

export type AuthMessageResponse = {
  success: boolean;
  message: string;
};

export type DeleteAccountPayload = {
  notes?: string;
};

export type OAuthStartResponse = {
  provider: string;
  auth_url: string;
  state: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name?: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  emailVisibility?: boolean;
  turnstileToken?: string;
};

export async function login(payload: LoginPayload) {
  try {
    const { data } = await apiClient.post<AuthSessionResponse>("/auth/login", payload);
    return data;
  } catch (error) {
    throw new Error(extractApiError(error, "Nao foi possivel entrar na sua conta."));
  }
}

export async function register(payload: RegisterPayload) {
  try {
    const { data } = await apiClient.post<AuthRegisterResponse>("/auth/register", payload);
    return data;
  } catch (error) {
    const err = new AuthApiError(
      extractApiError(error, "Nao foi possivel criar sua conta.")
    );

    if (typeof error === "object" && error && "response" in error) {
      const axiosError = error as {
        response?: { status?: number; data?: { detail?: { error_code?: string; message?: string } } };
      };
      err.status = axiosError.response?.status;
      err.errorCode = axiosError.response?.data?.detail?.error_code;
    }

    throw err;
  }
}

export async function forgotPassword(email: string) {
  try {
    const { data } = await apiClient.post<AuthMessageResponse>("/auth/forgot-password", { email });
    return data;
  } catch (error) {
    throw new Error(extractApiError(error, "Nao foi possivel enviar o email de recuperacao."));
  }
}

export async function confirmVerification(token: string) {
  try {
    const { data } = await apiClient.get<AuthMessageResponse>("/auth/confirm-verification", {
      params: { token },
    });
    return data;
  } catch (error) {
    throw new Error(extractApiError(error, "Nao foi possivel confirmar seu email."));
  }
}

export async function getCurrentUser() {
  try {
    const { data } = await apiClient.get<AuthSessionResponse>("/auth/me");
    return data;
  } catch (error) {
    const err = new Error(extractApiError(error, "Nao foi possivel validar sua sessao.")) as Error & {
      status?: number;
      errorCode?: string;
    };

    if (typeof error === "object" && error && "response" in error) {
      const axiosError = error as {
        response?: { status?: number; data?: { detail?: { error_code?: string } } };
      };
      err.status = axiosError.response?.status;
      err.errorCode = axiosError.response?.data?.detail?.error_code;
    }

    throw err;
  }
}

export async function logout() {
  try {
    const { data } = await apiClient.post<AuthMessageResponse>("/auth/logout");
    return data;
  } catch (error) {
    throw new Error(extractApiError(error, "Nao foi possivel encerrar a sessao."));
  }
}

export async function deleteAccount(payload: DeleteAccountPayload = {}) {
  try {
    const { data } = await apiClient.post<AuthMessageResponse>("/auth/delete-account", payload);
    return data;
  } catch (error) {
    throw new Error(extractApiError(error, "Nao foi possivel encerrar sua conta."));
  }
}

export async function startGoogleAuth() {
  try {
    const { data } = await apiClient.get<OAuthStartResponse>("/auth/google/start");
    return data;
  } catch (error) {
    throw new Error(extractApiError(error, "Nao foi possivel iniciar o login com Google."));
  }
}

export async function completeGoogleAuth(code: string, state: string) {
  try {
    const { data } = await apiClient.get<AuthSessionResponse>("/auth/google/callback", {
      params: { code, state },
    });
    return data;
  } catch (error) {
    throw new Error(extractApiError(error, "Nao foi possivel concluir o login com Google."));
  }
}
```

## Query layer

Aqui entra a parte mais alinhada ao seu stack: centralizar query key, `useQuery` para sessão e mutations para auth. Depois do login/logout, o importante é atualizar ou invalidar a query do usuário, porque o Query não faz isso sozinho. [reddit](https://www.reddit.com/r/react/comments/1jyu8uq/ui_doesnt_get_updated_properly_on_login_and_logut/)

### `src/features/auth/auth-query.ts`

```ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCurrentUser,
  login,
  logout,
  register,
  type AuthSessionResponse,
  type LoginPayload,
  type RegisterPayload,
} from "@/api/auth";
import { setAccessToken } from "@/api/http";

export const authQueryKeys = {
  all: ["auth"] as const,
  me: () => [...authQueryKeys.all, "me"] as const,
};

export function useCurrentUserQuery() {
  return useQuery({
    queryKey: authQueryKeys.me(),
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
}

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: async (session: AuthSessionResponse) => {
      setAccessToken(session.token || null);
      queryClient.setQueryData(authQueryKeys.me(), session);
      await queryClient.invalidateQueries({ queryKey: authQueryKeys.me() });
    },
  });
}

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
  });
}

export function useLogoutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      setAccessToken(null);
      queryClient.removeQueries({ queryKey: authQueryKeys.me() });
      await queryClient.invalidateQueries({ queryKey: authQueryKeys.me() });
    },
    onError: async () => {
      setAccessToken(null);
      queryClient.removeQueries({ queryKey: authQueryKeys.me() });
      await queryClient.invalidateQueries({ queryKey: authQueryKeys.me() });
    },
  });
}
```

Se você preferir evitar o `invalidateQueries` depois do `setQueryData`, pode manter só `setQueryData` no login; eu deixei os dois porque alguns fluxos dependem de cookie e podem precisar do re-hit em `/auth/me`. [reddit](https://www.reddit.com/r/react/comments/1jyu8uq/ui_doesnt_get_updated_properly_on_login_and_logut/)

## Hook de conveniência

Esse hook vira a interface única da autenticação no app. [github](https://github.com/TanStack/query/discussions/3253)

### `src/features/auth/use-auth.ts`

```ts
import {
  useCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from "./auth-query";

export function useAuth() {
  const me = useCurrentUserQuery();
  const login = useLoginMutation();
  const register = useRegisterMutation();
  const logout = useLogoutMutation();

  return {
    user: me.data?.user ?? null,
    session: me.data ?? null,
    token: me.data?.token ?? null,
    isAuthenticated: !!me.data?.user,
    isLoading: me.isLoading,
    isFetching: me.isFetching,
    me,
    login,
    register,
    logout,
  };
}
```

## Rota base logada

Como `src/routes/app.tsx` já é a rota base da área autenticada e já renderiza o `WorkspaceShell`, ele é exatamente o lugar certo para proteger tudo com um único guard. O TanStack Router recomenda esse tipo de proteção em rotas agrupadoras com `beforeLoad`. [tanstack](https://tanstack.com/router/v1/docs/guide/authenticated-routes)

### `src/routes/app.tsx`

```tsx
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";
import { authQueryKeys } from "@/features/auth/auth-query";
import type { AuthSessionResponse } from "@/api/auth";

export const Route = createFileRoute("/app")({
  beforeLoad: async ({ context, location }) => {
    const session = await context.queryClient.ensureQueryData<AuthSessionResponse>({
      queryKey: authQueryKeys.me(),
      queryFn: context.auth.getCurrentUser,
    });

    if (!session?.user) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AppLayout,
});

function AppLayout() {
  return (
    <WorkspaceShell>
      <Outlet />
    </WorkspaceShell>
  );
}
```

Esse padrão depende de você injetar `queryClient` e um helper `auth.getCurrentUser` no contexto do router. Isso é compatível com a documentação de auth do TanStack Router. [tanstack](https://tanstack.com/router/latest/docs/how-to/setup-authentication)

## Contexto do router

Para o `beforeLoad` ter acesso ao QueryClient e à função de sessão, você passa isso ao criar o router. [tanstack](https://tanstack.com/router/latest/docs/guide/authenticated-routes)

### Exemplo de criação do router

```tsx
import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { getCurrentUser } from "@/api/auth";

export const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: {
      getCurrentUser,
    },
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
```

## Login route

No login, você usa mutation do Query e redireciona para o `redirect` vindo da URL, ou para `/app` por padrão. [stackoverflow](https://stackoverflow.com/questions/74795274/how-to-use-react-tanstack-query-usemutation-in-my-component)

### `src/routes/login.tsx`

```tsx
import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useLoginMutation } from "@/features/auth/auth-query";
import { extractApiError } from "@/api/http";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const search = Route.useSearch() as { redirect?: string };
  const login = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await login.mutateAsync({ email, password });

      await navigate({
        to: search.redirect ? search.redirect : "/app",
      });
    } catch (error) {
      alert(extractApiError(error, "Nao foi possivel entrar."));
    }
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-semibold">Entrar</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full rounded-md border px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full rounded-md border px-3 py-2"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={login.isPending}
          className="w-full rounded-md bg-primary px-4 py-2 text-white disabled:opacity-60"
        >
          {login.isPending ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
```

## Melhor encaixe no seu caso

No seu app, eu faria assim:

- manter `WorkspaceShell` dentro de `src/routes/app.tsx`
- usar `beforeLoad` em `app.tsx` para proteger toda a árvore privada
- usar TanStack Query como store da sessão
- evitar `AuthContext` separado, a não ser que você queira API ergonômica extra
- manter `auth.ts` como contrato frontend ↔ Python, igual ao tarot [tanstack](https://tanstack.com/router/latest/docs/guide/authenticated-routes)

Isso te dá uma arquitetura mais “TanStack nativa” e evita duplicar sessão em dois lugares, que é o problema clássico quando se mistura Context + Query sem necessidade. [github](https://github.com/TanStack/query/discussions/3253)

## Ajuste importante

No exemplo de `beforeLoad`, `ensureQueryData` vai lançar erro se `/auth/me` responder 401. Então, na prática, vale encapsular isso com try/catch para redirecionar corretamente. [tanstack](https://tanstack.com/router/latest/docs/api/router/redirectFunction)

Versão mais segura:

```tsx
beforeLoad: async ({ context, location }) => {
  try {
    const session = await context.queryClient.ensureQueryData({
      queryKey: authQueryKeys.me(),
      queryFn: context.auth.getCurrentUser,
    });

    if (!session?.user) {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }
  } catch {
    throw redirect({
      to: "/login",
      search: { redirect: location.href },
    });
  }
}
```

## Recomendação final

Para o seu stack atual, eu **não faria AuthContext tradicional** como primeira opção. Eu faria:

- `auth.ts`
- `http.ts`
- `auth-query.ts`
- `use-auth.ts`
- proteção em `src/routes/app.tsx`
- `WorkspaceShell` como layout da área autenticada

Esse desenho é o mais coerente com TanStack Router + TanStack Query e com a sua estrutura existente de pós-login. [tanstack](https://tanstack.com/router/v1/docs/guide/authenticated-routes)

Posso no próximo passo te entregar isso já **100% no formato dos arquivos prontos para colar**, incluindo:
- `http.ts`
- `auth.ts`
- `auth-query.ts`
- `use-auth.ts`
- `src/routes/app.tsx`
- `src/routes/login.tsx`
- exemplo de `router.tsx` com `queryClient` no context.

## Status da Implementa��o (Agent do Frontend)

A implementa��o do frontend foi **conclu�da com sucesso**.
- A depend�ncia \xios\ foi instalada.
- Os arquivos \src/api/http.ts\ e \src/api/auth.ts\ foram criados e configurados com suporte a JWT/Cookies via interceptors.
- A camada de query (\src/features/auth/auth-query.ts\ e \use-auth.ts\) foi implementada para isolar as chamadas usando o TanStack Query.
- A tela de login base (\src/routes/login.tsx\) j� foi criada.
- O contexto do Router (\__root.tsx\ e \main.tsx\) foi atualizado para conter a fun��o \getCurrentUser\ e a refer�ncia ao \queryClient\.
- O bloqueio via \eforeLoad\ foi adicionado em \src/routes/app.tsx\, por�m est� **COMENTADO** neste exato momento para permitir o desenvolvimento da interface (UI) sem bloquear a tela do desenvolvedor.

### Pr�ximo Passo para o Agent da VPS (Backend Python)

1. **Desenvolvimento da API:** Garantir que as rotas \/auth/login\, \/auth/register\, \/auth/logout\ e principalmente \/auth/me\ estejam implementadas e retornando os contratos JSON descritos no arquivo \uth.ts\.
2. **CORS e Cookies:** Se voc� for usar Cookies \HttpOnly\, certifique-se de configurar a pol�tica de CORS corretamente no FastAPI (\llow_credentials=True\, com as origens permitidas).
3. **Conex�o Real:** Assim que a API do backend estiver pronta e exposta na vari�vel \VITE_API_URL\, o respons�vel pelo frontend poder� ir no arquivo \src/routes/app.tsx\ e **descomentar** o bloco \eforeLoad\. A partir desse momento, as rotas ser�o protegidas de forma real e o login se tornar� obrigat�rio.

