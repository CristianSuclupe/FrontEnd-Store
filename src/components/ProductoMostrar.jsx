import { Link } from "react-router-dom";
import { PRODUCTO } from "../router/routes";
const ProductoMostrar = ({ productoMostrar }) => {
  return (
    <div className="producto">
      <Link to={PRODUCTO.replace(":id", productoMostrar.id)}>
        <img
          className="producto__imagen"
          src={productoMostrar.imagen}
          alt="imagen camisa"
        />
        <div>
          <p className="producto__nombre">{productoMostrar.nombre}</p>
          <p className="producto__precio">{productoMostrar.precio}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductoMostrar;
