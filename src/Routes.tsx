import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeView from "@views/HomeView";
import LoginView from "@views/LoginView";
import RegisterView from "@views/RegisterView";
import PasswordRecoverView from "@views/PasswordRecoverView";

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
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
