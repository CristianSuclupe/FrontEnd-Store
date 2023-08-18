import { useLoaderData } from "react-router-dom";
import ProductoMostrar from "../components/ProductoMostrar";
import { obtenerProductos } from "../data/productos";

export const loader = async () => {
  const productos = obtenerProductos();
  return productos;
};

const Tienda = () => {
  const productos = useLoaderData();
  return (
    <>
      <h1>Nuestros productos</h1>
      <div className="grid">
        {productos.map((productoMostrar) => (
          <ProductoMostrar
            productoMostrar={productoMostrar}
            key={productoMostrar.id}
          />
        ))}
        <div className="grafico grafico--camisas"></div>
        <div className="grafico grafico--node"></div>
      </div>
    </>
  );
};

export default Tienda;
