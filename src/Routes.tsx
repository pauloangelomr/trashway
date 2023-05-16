import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeView from "@views/HomeView";
import LoginView from "@views/LoginView";
import RegisterView from "@views/RegisterView";
import PasswordRecoverView from "@views/PasswordRecoverView";
import AdminDashboardView from "@views/AdminDashboardView";
import ProtectedRoute from "@components/ProtectedRoute";
import AdminProfileView from "@views/AdminProfileView";
import AdminView from "@views/admin/AdminView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/sobre",
    element: <h1>Tela Sobre</h1>
  },
  {
    path: "/login",
    element: <LoginView />
  },
  {
    path: "/cadastro",
    element: <RegisterView />
  },
  {
    path: "/recuperar-senha",
    element: <PasswordRecoverView />
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminView />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboardView />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/perfil",
    element: (
      <ProtectedRoute>
        <AdminProfileView />
      </ProtectedRoute>
    )
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
