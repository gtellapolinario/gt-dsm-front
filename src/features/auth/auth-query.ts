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
