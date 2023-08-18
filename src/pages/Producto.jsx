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
        <img
          className="productoElegido__imagen"
          src={producto.imagen}
          alt="producto imagen"
        />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            cupiditate sit deleniti nesciunt quos accusamus recusandae qui
            numquam assumenda itaque, quo atque similique consequatur
            reprehenderit enim voluptatibus distinctio expedita. Distinctio.
          </p>
          <form className="formulario">
            <select className="formulario__campo" defaultValue="default">
              <option className="formulario__option" value="default" disabled>
                --Selecionar Talla--
              </option>
              <option className="formulario__option">{TALLA_CHICA}</option>
              <option className="formulario__option">{TALLA_MEDIANA}</option>
              <option className="formulario__option">{TALLA_GRANDE}</option>
            </select>
            <input
              className="formulario__campo"
              type="number"
              placeholder="Cantidad"
              min="1"
            />
            <input
              className="formulario__submit"
              type="submit"
              value="Agregar al carrito"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Producto;
