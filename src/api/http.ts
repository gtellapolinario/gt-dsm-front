import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";

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
