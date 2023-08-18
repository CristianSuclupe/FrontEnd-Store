import ImagenNosotros from "../assets/nosotros.jpg";
import PorqueComprar from "../components/PorqueComprar";

const Nosotros = () => {
  return (
    <>
      <h1>nosotros</h1>
      <div className="nosotros">
        <div className="nosotros__contenido">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            doloribus sunt, porro facere culpa, eveniet officia a laborum
            architecto illum similique at accusantium reprehenderit nisi quidem.
            Eius repellat blanditiis consequuntur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe totam quo nulla tenetur placeat
            rem consequatur consequuntur reiciendis ullam modi numquam sint
            minima atque, voluptatibus recusandae laboriosam! Accusantium,
            deleniti velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            doloribus sunt, porro facere culpa, eveniet officia a laborum
            architecto illum similique at accusantium reprehenderit nisi quidem.
            Eius repellat blanditiis consequuntur.
          </p>
        </div>
        <img
          className="nosotros__imagen"
          src={ImagenNosotros}
          alt="imagen nosotros"
        />
      </div>
      <PorqueComprar />
    </>
  );
};

export default Nosotros;
