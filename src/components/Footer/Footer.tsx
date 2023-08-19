/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] w-full pt-32 pb-16 px-8 mt-auto">
      <div className="flex max-sm:flex-col max-sm:gap-4 md:flex-row justify-between container mx-auto">
        <div className="flex flex-col gap-4 flex-auto w-[40%] max-sm:w-full max-sm:pr-0 max-sm:items-center pr-32">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="logo" className="w-16" />
            <h3 className="font-bold text-slate-900 text-xl">EnatelPeru</h3>
          </div>
          <p className="text-gray-500">
            <span className="text-gray-700">EnatelPeru</span> es líder en la
            instalación de redes en hogares, brindando soluciones de
            conectividad excepcionales.
          </p>
          <div className="flex gap-6">
            <a href="#">
              <RiFacebookFill className="bg-white rounded-full text-red-600 p-1.5 w-8 h-8 shadow-lg hover:bg-red-500 hover:text-white transition-colors " />
            </a>
            <a href="#">
              <RiTwitterLine className="bg-white rounded-full text-red-600 p-1.5 w-8 h-8 shadow-lg hover:bg-red-500 hover:text-white transition-colors " />
            </a>
            <a href="#">
              <RiInstagramLine className="bg-white rounded-full text-red-600 p-1.5 w-8 h-8 shadow-lg hover:bg-red-500 hover:text-white transition-colors " />
            </a>
            <a href="#">
              <RiWhatsappLine className="bg-white rounded-full text-red-600 p-1.5 w-8 h-8 shadow-lg hover:bg-red-500 hover:text-white transition-colors " />
            </a>
          </div>
          <span className="text-gray-500">
            &copy; 2023 EnatelPeru. Todos los derechos reservados
          </span>
        </div>
        <div className="flex-auto w-[20%] max-sm:w-full">
          <h4 className="font-semibold text-slate-900 text-lg mb-4">
            Links Populares
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-slate-600 transition-all"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-slate-600 transition-all"
              >
                Nuestros Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-slate-600 transition-all"
              >
                Contactanos
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-auto w-[20%] max-sm:w-full">
          <h4 className="font-semibold text-slate-900 text-lg mb-4">
            Informacion
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-slate-600 transition-all"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-slate-600 transition-all"
              >
                Politica de privacidad
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-slate-600 transition-all"
              >
                Terminos y Condiciones
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-auto w-[20%] max-sm:w-full">
          <h4 className="font-semibold text-slate-900 text-lg mb-4">Otros</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-slate-600 transition-all"
              >
                Soporte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
