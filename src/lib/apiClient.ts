/**
 * Cliente de API stub tipado, sem o uso de 'any'.
 */
export const apiClient = {
  post: async (_url: string, _data: unknown): Promise<{ data: Record<string, unknown> }> => ({ data: {} }),
  get: async (_url: string): Promise<{ data: Record<string, unknown> }> => ({ data: {} }),
  sendContactMessage: async (_data: unknown): Promise<{ data: Record<string, unknown> }> => ({ data: {} }),
};

export const sendContactMessage = apiClient.sendContactMessage;
