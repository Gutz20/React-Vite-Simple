/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  RiMapPin2Line,
  RiSmartphoneLine,
  RiMailLine,
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    // Footer Version 1
    // <div className="bg-[#f8f8f8] w-full pt-32 pb-8 px-8">
    //   <div className="grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
    //     <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-4">
    //       <h1 className="text-3xl font-bold text-gray-900">Brand</h1>
    //       <p className="text-gray-600 text-justify">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
    //         ratione doloremque blanditiis facilis suscipit laborum, iste
    //         repellat nisi! Numquam ipsum maxime molestias veritatis ullam ad
    //         repellat facere officia velit laudantium!
    //       </p>
    //     </div>
    //     <div className="md:col-span-4 xl:col-span-2">
    //       <h2 className="font-bold mb-6 uppercase">Menu</h2>
    //       <nav className="flex flex-col gap-4">
    //         <a href="#" className="hover:underline">
    //           Inicio
    //         </a>
    //         <a href="#" className="hover:underline">
    //           Nosotros
    //         </a>
    //         <a href="#" className="hover:underline">
    //           Servicios
    //         </a>
    //         <a href="#" className="hover:underline">
    //           Blog
    //         </a>
    //         <a href="#" className="hover:underline">
    //           Contacto
    //         </a>
    //       </nav>
    //     </div>
    //     <div className="md:col-span-4 xl:col-span-3">
    //       <h2 className="font-bold mb-6 uppercase">Redes Sociales</h2>
    //       <nav>
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
    //         >
    //           <RiFacebookBoxFill className="w-[20px] h-[20px]" />
    //           Enatel Peru
    //         </a>
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
    //         >
    //           <RiTwitterLine className="w-[20px] h-[20px]" />
    //           Enatel Peru
    //         </a>
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
    //         >
    //           <RiInstagramLine className="w-[20px] h-[20px]" />
    //           Enatel Peru
    //         </a>
    //       </nav>
    //     </div>
    //     <div className="md:col-span-4 xl:col-span-3">
    //       <h2 className="font-bold mb-6 uppercase">Contacto</h2>
    //       <div className="flex flex-col gap-4">
    //         <p className="flex items-center gap-2">
    //           <RiMapPin2Line className="w-6 h-6" />
    //           Ica, Peru
    //         </p>
    //         <p className="flex items-center gap-2">
    //           <RiMailLine className="w-6 h-6" />
    //           enatelperu@gmail.com
    //         </p>
    //         <p className="flex items-center gap-2">
    //           <RiSmartphoneLine className="w-6 h-6" />
    //           (+51) 5555 555 555
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <hr className="my-4" />
    //   <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
    //     <p className="text-gray-800 text-center md:text-left">
    //       &copy; 2023{" "}
    //       <span className="text-gray-900 font-bold">EnatelPeru.</span> Todos los
    //       derechos reservados.
    //     </p>
    //     <div className="flex flex-col md:flex-row items-center gap-2">
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:text-gray-900 transition-colors"
    //       >
    //         Terminos y condiciones
    //       </a>
    //       <span className="hidden md:flex">|</span>
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:text-gray-900 transition-colors"
    //       >
    //         Política de privacidad
    //       </a>
    //     </div>
    //   </div>
    // </div>
    // Footer Version 2
    <footer className="bg-[#f8f8f8] w-full pt-32 pb-16 px-8">
      <div className="flex justify-between container mx-auto">
        <div className="flex flex-col gap-4 flex-auto w-[40%] pr-32">
          <div className="flex items-center gap-2">
            <img src="vite.svg" alt="logo" />
            <h3 className="font-bold text-slate-900 text-xl">EnatelPeru</h3>
          </div>
          <p className="text-gray-500">
            <span className="text-gray-700">EnatelPeru</span> is a private
            virtual network that has unique features and has high security
          </p>
          <div className="flex gap-6">
            <RiFacebookFill className="bg-white rounded-full text-red-600 p-1.5 w-8 h-8 shadow-lg" />
            <RiTwitterLine className="bg-white rounded-full text-red-600 p-1.5 w-8 h-8 shadow-lg" />
            <RiInstagramLine className="bg-white rounded-full text-red-600 p-1.5 w-8 h-8 shadow-lg" />
          </div>
          <span className="text-gray-500">&copy; 2023 EnatelPeru</span>
        </div>
        <div className="flex-auto w-[20%]">
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
        <div className="flex-auto w-[20%]">
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
        <div className="flex-auto w-[20%]">
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
