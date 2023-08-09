/* eslint-disable @typescript-eslint/no-unused-vars */
import { plans } from "@/helpers";
import { RiCheckLine } from "react-icons/ri";
import { Plan } from "./components";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* Start */}
        <section className="flex flex-row max-sm:flex-col max-sm:items-center max-sm:gap-10 pt-5 pb-12 justify-center">
          <div className="flex flex-col gap-4 w-[40%] md:w-[60%] max-sm:w-full max-sm:p-8">
            <h2 className="text-6xl md:text-4xl max-sm:text-2xl font-semibold text-slate-900">
              Queremos que todo sea fácil para ti.{" "}
              <span className="font-bold">Enatel Perú.</span>
            </h2>
            <p className="text-gray-500">
              <span className="font-semibold">Enatel Perú</span> es líder en la
              instalación de redes en hogares, brindando soluciones de
              conectividad excepcionales. Nuestros servicios se centran en
              garantizar conexiones confiables y de alta velocidad para
              satisfacer las necesidades digitales de nuestros clientes. Con un
              enfoque en la calidad y la innovación, nos esforzamos por crear
              entornos conectados que mejoren la experiencia de comunicación y
              promuevan el avance tecnológico en el Perú.
            </p>
            <a
              href="#plan"
              className="bg-red-600 rounded-md w-fit px-8 py-2 text-white font-bold shadow-lg shadow-red-500/50"
            >
              Empezar
            </a>
          </div>
          <img
            src="hello_undraw.svg"
            alt="ilustration"
            className="w-[60%] md:w-[40%]"
          />
        </section>

        {/* Cards Simples */}
        {/* <div className="flex justify-around p-8 my-5 shadow-lg">
          <div className="flex gap-6 items-center">
            <RiUser3Fill className="w-[30px] h-[30px] bg-red-300 rounded-full p-2 text-red-600" />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900">90+</span>
              <span className="font-semibold text-gray-400">Users</span>
            </div>
          </div>
          <div className="w-[1px] bg-slate-400" />
          <div className="flex gap-6 items-center">
            <RiMapPin2Line className="w-[30px] h-[30px] bg-red-300 rounded-full p-2 text-red-600" />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900">90+</span>
              <span className="font-semibold text-gray-400">Locations</span>
            </div>
          </div>
          <div className="w-[1px] bg-slate-400" />
          <div className="flex gap-6 items-center">
            <RiServerLine className="w-[30px] h-[30px] bg-red-300 rounded-full p-2 text-red-600" />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900">90+</span>
              <span className="font-semibold text-gray-400">Servers</span>
            </div>
          </div>
        </div> */}

        {/* Features */}
        <div className="flex max-sm:flex-col max-sm:p-8 gap-8 py-16">
          <div>
            <img src="shared_workspace.svg" alt="workspace" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="capitalize font-bold text-xl text-slate-900">
              Ofrecemos muchas características que puedes utilizar.
            </h3>
            <span className="text-gray-500">
              Puedes explorar las características que ofrecemos de manera
              divertida y cada una tiene sus propias funciones.
            </span>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center">
                  <RiCheckLine className="bg-green-400 rounded-full text-white p-0.5 w-[20px] h-[20px]" />
                  <span className="text-gray-500">
                    Conexión rápida y estable en todo momento.
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckLine className="bg-green-400 rounded-full text-white p-0.5 w-[20px] h-[20px]" />
                  <span className="text-gray-500">
                    Soporte técnico disponible las 24 horas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#fbfbfb]" id="plan">
        <div className="container mx-auto">
          {/* Title */}
          <div className="flex flex-col gap-4 max-sm:px-8 py-12 items-center justify-center">
            <h3 className="capitalize font-bold text-xl">Escoge tu plan</h3>
            <p className="text-gray-500 text-justify">
              Elije el paquete que sea mejor para ti y explóralo con alegría y
              entusiasmo.
            </p>
          </div>

          {/* Cards Plans */}
          <div className="flex flex-wrap justify-evenly">
            {/* Card */}
            {plans.map(({ features, price, speed, title }, i) => (
              <Plan
                key={i}
                price={price}
                speed={speed}
                title={title}
                features={features}
              />
            ))}
          </div>
        </div>

        {/* Maps Location */}
        {/* <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center pt-12 pb-6 my-5">
            <h3 className="font-semibold text-slate-900">
              Una gran red global de VPN rápida.
            </h3>
            <p className="text-gray-500 font-normal">
              Encuentra{" "}
              <span className="font-semibold text-slate-900">Enatel Perú </span>
              en todas partes para facilitarte la conexión al cambiar de
              ubicación.
            </p>
          </div>
          <img
            src="connected_world.svg"
            alt="ilustration"
            className="mx-auto h-[600px] w-[600px]"
          />
        </div> */}

        {/* Carousel Brands */}
        <div>{/* Name of brands */}</div>

        {/* Section of customer */}
        <div>
          {/* <div className="flex flex-col justify-center items-center my-5">
            <h3 className="font-semibold text-slate-900">
              Con la confianza de miles de clientes satisfechos.
            </h3>
            <p className="text-gray-500 font-normal">
              Estas son las historias de nuestros clientes que se han unido a
              nosotros con gran satisfacción al usar esta característica
              increíble.
            </p>
          </div> */}

          {/* Carousel of Customers */}
          <div className="flex flex-row gap-4 items-center justify-center py-5">
            {/* Card of customer */}
            {/* {customersReview.map(({ name, location, review, star, image }) => (
              <div className="outline outline-gray-300 rounded-md p-4 w-96 h-44 hover:outline-red-500">
                <div className="flex flex-row gap-4 mb-4">
                  <img
                    src={image}
                    alt="person"
                    className="w-[40px] h-[40px] object-cover rounded-full"
                  />
                  <div className="flex-auto flex-col">
                    <h4 className="font-semibold text-slate-900">{name}</h4>
                    <span className="text-gray-500">{location}</span>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-2">
                    <span className="font-semibold text-slate-900">{star}</span>{" "}
                    <RiStarSFill className="text-yellow-400" />
                  </div>
                </div>
                <p>{review}</p>
              </div>
            ))} */}
          </div>
        </div>

        {/* Card of Newsletter */}
        {/* <div className="flex justify-between items-center bg-white w-[50%] rounded-lg shadow-lg p-16 mx-auto relative top-[80px] z-50">
          <div>
            <h3 className="font-bold text-slate-900 text-2xl">
              Subscribe Now for Get Special Features!
            </h3>
            <span className="text-gray-500">
              Let's subscribe with us and find the fun.
            </span>
          </div>
          <button className="bg-red-600 rounded-md w-fit px-8 py-2 text-white font-bold shadow-lg shadow-red-500/50">
            Subscribe Now
          </button>
        </div> */}
      </section>
    </>
  );
};

export default Home;
