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
