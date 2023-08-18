import Icono1 from "../assets/icono_1.png";
import Icono2 from "../assets/icono_2.png";
import Icono3 from "../assets/icono_3.png";
import Icono4 from "../assets/icono_4.png";

const PorqueComprar = () => {
  return (
    <section className="contendor comprar">
      <h2 className="comprar__titulo">Porqué comprar con nosotros</h2>
      <div className="bloques">
        <div className="bloque">
          <img className="bloque__imagen" src={Icono1} alt="porque comprar" />
          <h3 className="bloque__titulo">El Mejor Precio</h3>
          <p className="bloque__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            temporibus consequuntur reiciendis possimus iure asperiores error.
          </p>
        </div>
        <div className="bloque">
          <img className="bloque__imagen" src={Icono2} alt="porque comprar" />
          <h3 className="bloque__titulo">Para Devs</h3>
          <p className="bloque__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            temporibus consequuntur reiciendis possimus iure asperiores error.
          </p>
        </div>
        <div className="bloque">
          <img className="bloque__imagen" src={Icono3} alt="porque comprar" />
          <h3 className="bloque__titulo">Envío Gratis</h3>
          <p className="bloque__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            temporibus consequuntur reiciendis possimus iure asperiores error.
          </p>
        </div>
        <div className="bloque">
          <img className="bloque__imagen" src={Icono4} alt="porque comprar" />
          <h3 className="bloque__titulo">La Mejor Calidad</h3>
          <p className="bloque__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            temporibus consequuntur reiciendis possimus iure asperiores error.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PorqueComprar;
