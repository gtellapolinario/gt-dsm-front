import React, { createContext, useContext, useState } from "react";

export interface AuthContextType {
  user: any | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (userData: any) => Promise<{ user: any }>;
  logout: () => void;
  requestPatientLink: (data: any) => Promise<any>;
  completeCommonProfile: (data: any) => Promise<any>;
  register: (data: any) => Promise<{ user: any }>;
  loginWithGoogleToken: (token: string) => Promise<{ user: any }>;
  requestProfessionalAccess: (data: any) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (userData: any) => {
    setIsLoading(true);
    return new Promise<{ user: any }>((resolve) => {
      setTimeout(() => {
        setUser(userData);
        setIsLoading(false);
        resolve({ user: userData });
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const stubAction = async (_data?: any) => {
    return Promise.resolve({ user: { id: "stub", name: "Stub User" } });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      isAuthenticated: !!user,
      login, 
      logout,
      requestPatientLink: stubAction,
      completeCommonProfile: stubAction,
      register: stubAction,
      loginWithGoogleToken: stubAction as any,
      requestProfessionalAccess: stubAction,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
