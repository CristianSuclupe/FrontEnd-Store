import { Outlet, Link, useLocation } from "react-router-dom";
import { HOME, NOSOTROS } from "../router/routes";
import LOGO from "../assets/logo.png";
import Footer from "./Footer";
const Layout = () => {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <Link href={HOME}>
          <img className="header__logo" src={LOGO} alt="Logotipo" />
        </Link>
      </header>
      <nav className="navegacion">
        <Link
          className={`${
            location.pathname === HOME && "navegacion__enlace--activo"
          } navegacion__enlace`}
          to={HOME}
        >
          Tienda
        </Link>
        <Link
          className={`${
            location.pathname === NOSOTROS && "navegacion__enlace--activo"
          } navegacion__enlace`}
          to={NOSOTROS}
        >
          Nosotros
        </Link>
      </nav>
      <main className="contenedor">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
