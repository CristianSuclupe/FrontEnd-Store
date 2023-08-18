import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Tienda, { loader as productosLoader } from "../pages/Tienda";
import Producto, { loader as productoLoader } from "../pages/Producto";
import { HOME, NOSOTROS, PRODUCTO } from "./routes";
import Nosotros from "../pages/Nosotros";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Tienda />,
        loader: productosLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: NOSOTROS,
        element: <Nosotros />,
      },
      {
        path: PRODUCTO,
        element: <Producto />,
        loader: productoLoader,
      },
    ],
  },
]);

export default router;
