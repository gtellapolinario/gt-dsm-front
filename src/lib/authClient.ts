import type { Patient } from "./schemas";

/**
 * Retorna o caminho de redirecionamento pós-autenticação do usuário.
 */
export function getPostAuthPath(_user?: Patient): string {
  return "/app";
}
