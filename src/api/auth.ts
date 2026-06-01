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
