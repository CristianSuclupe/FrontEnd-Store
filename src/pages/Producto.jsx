import { useLoaderData } from "react-router-dom";
import { obtenerProducto } from "../data/productos";
import {
  TALLA_CHICA,
  TALLA_MEDIANA,
  TALLA_GRANDE,
} from "../constants/constantes";

export const loader = async ({ params }) => {
  const producto = await obtenerProducto(params.id);
  if (Object.values(producto).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Not found",
    });
  }
  return producto;
};

const Producto = () => {
  const producto = useLoaderData();
  return (
    <>
      <h2>{producto.nombre}</h2>
      <div className="productoElegido__contenido">
        <img src={producto.imagen} alt="producto imagen" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            cupiditate sit deleniti nesciunt quos accusamus recusandae qui
            numquam assumenda itaque, quo atque similique consequatur
            reprehenderit enim voluptatibus distinctio expedita. Distinctio.
          </p>
          <form action="">
            <select name="" id="">
              <option disabled defaultValue>
                --Selecionar Talla--
              </option>
              <option>{TALLA_CHICA}</option>
              <option>{TALLA_MEDIANA}</option>
              <option>{TALLA_GRANDE}</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Producto;
