import { createFileRoute } from "@tanstack/react-router";
import Login from "@/components/workspace/config/Login";
import { AuthProvider } from "@/context/AuthContext";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  // Wrap with AuthProvider since the context is now required by the new Login component.
  // Ideally AuthProvider should be at the root of the app, but this serves to isolate it for now.
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
