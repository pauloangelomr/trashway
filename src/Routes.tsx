import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeView from "@views/HomeView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/sobre",
    element: <h1>Tela Sobre</h1>
  }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
