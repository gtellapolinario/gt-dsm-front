/**
 * googleIdentity.ts
 * Implementação stub do Google Identity Services.
 */

interface GoogleButtonConfig {
  width?: string;
  [key: string]: unknown;
}

/**
 * Solicita o token de identificação do Google (Stub).
 */
export async function requestGoogleIdToken(): Promise<string> {
  return "stub-google-token";
}

/**
 * Renderiza o botão de Login do Google e retorna uma Promise que
 * resolve com o token de credencial quando clicado.
 */
export async function renderGoogleButton(
  container: HTMLElement | null,
  _config?: GoogleButtonConfig
): Promise<string> {
  return new Promise<string>((resolve) => {
    if (container) {
      container.innerHTML = `<button type="button" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; font-family: sans-serif; font-size: 14px; font-weight: 500; display: inline-flex; align-items: center; justify-content: center; gap: 8px; background-color: white; color: #3c4043; box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15); border: none;">Sign in with Google (Stub)</button>`;
      container.onclick = (e) => {
        e.preventDefault();
        resolve("stub-credential-token");
      };
    }
  });
}
