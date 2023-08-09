import {
  RiUser3Fill,
  RiMapPin2Line,
  RiServerLine,
  RiCheckLine,
  RiStarSFill,
} from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* Start */}
        <section className="flex flex-row pt-5 pb-12">
          <div className="flex flex-col gap-4 w-[40%]">
            <h2 className="text-6xl font-semibold text-slate-900">
              Want anything to be easy with{" "}
              <span className="font-bold">LalesVPN.</span>
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              error laborum?. <span className="font-semibold">Enatel Peru</span>
            </p>
            <button className="bg-red-600 rounded-md w-fit px-8 py-2 text-white font-bold shadow-lg shadow-red-500/50">
              Get Started
            </button>
          </div>
          <img src="hello_undraw.svg" alt="ilustration" className="w-[60%]" />
        </section>

        {/* Cards Simples */}
        <div className="flex justify-around p-8 my-5 shadow-lg">
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
        </div>

        {/* Features */}
        <div className="flex gap-8 py-16">
          <div>
            <img src="shared_workspace.svg" alt="workspace" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="capitalize font-bold text-xl text-slate-900">
              We Provide Many Features You Can Use
            </h3>
            <span className="text-gray-500">
              You can explore the features that we provide with fun and have
              their own functions each future.
            </span>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center">
                  <RiCheckLine className="bg-green-400 rounded-full text-white p-0.5 w-[20px] h-[20px]" />
                  <span className="text-gray-500">
                    Powerfull online protection.
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckLine className="bg-green-400 rounded-full text-white p-0.5 w-[20px] h-[20px]" />
                  <span className="text-gray-500">
                    Internet without borders.
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckLine className="bg-green-400 rounded-full text-white p-0.5 w-[20px] h-[20px]" />
                  <span className="text-gray-500">Supercharged VPN</span>
                </li>
                <li className="flex gap-2 items-center">
                  <RiCheckLine className="bg-green-400 rounded-full text-white p-0.5 w-[20px] h-[20px]" />
                  <span className="text-gray-500">No specific time limits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#fbfbfb]">
        <div className="container mx-auto">
          {/* Title */}
          <div className="flex flex-col gap-4 py-12 items-center justify-center">
            <h3 className="capitalize font-bold text-xl">Choose your plan</h3>
            <p className="text-gray-500">
              Let's choose the package that is best for you and explore it
              happily and cheerfully
            </p>
          </div>

          {/* Cards Plans */}
          <div className="flex flex-wrap justify-evenly">
            {/* Card */}
            <div className="outline outline-1 outline-gray-500 w-fit py-12 px-24">
              <div className="flex flex-col justify-center items-center mb-5 gap-2">
                <img
                  src="order_delivered.svg"
                  alt="order"
                  className="w-44 h-44"
                />
                <h4 className="font-semibold text-slate-900">Free Plan</h4>
              </div>
              <div>
                <ul className="flex flex-col gap-5">
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Unlimited Bandwitch</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>No Traffic Logs</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Encrypted Connection</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Works on All Devices</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center mt-24 gap-4">
                <h3 className="font-semibold text-slate-900 text-2xl">Free</h3>
                <button
                  type="button"
                  className="w-full px-4 py-1 rounded-xl font-semibold text-red-500 outline outline-1 outline-red-500"
                >
                  Select
                </button>
              </div>
            </div>
            {/* Card */}
            <div className="outline outline-1 outline-gray-500 w-fit py-12 px-24">
              <div className="flex flex-col justify-center items-center mb-5 gap-2">
                <img
                  src="order_delivered.svg"
                  alt="order"
                  className="w-44 h-44"
                />
                <h4 className="font-semibold text-slate-900">Free Plan</h4>
              </div>
              <div>
                <ul className="flex flex-col gap-5">
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Unlimited Bandwitch</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>No Traffic Logs</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Encrypted Connection</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Works on All Devices</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center mt-24 gap-4">
                <h3 className="font-semibold text-slate-900 text-2xl">Free</h3>
                <button
                  type="button"
                  className="w-full px-4 py-1 rounded-xl font-semibold text-red-500 outline outline-1 outline-red-500"
                >
                  Select
                </button>
              </div>
            </div>
            {/* Card */}
            <div className="outline outline-1 outline-gray-500 w-fit py-12 px-24">
              <div className="flex flex-col justify-center items-center mb-5 gap-2">
                <img
                  src="order_delivered.svg"
                  alt="order"
                  className="w-44 h-44"
                />
                <h4 className="font-semibold text-slate-900">Free Plan</h4>
              </div>
              <div>
                <ul className="flex flex-col gap-5">
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Unlimited Bandwitch</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>No Traffic Logs</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Encrypted Connection</span>
                  </li>
                  <li className="flex flex-row gap-4">
                    <RiCheckLine className="text-green-500 p-0.5 w-[20px] h-[20px]" />
                    <span>Works on All Devices</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center mt-24 gap-4">
                <h3 className="font-semibold text-slate-900 text-2xl">Free</h3>
                <button
                  type="button"
                  className="w-full px-4 py-1 rounded-xl font-semibold text-red-500 outline outline-1 outline-red-500"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center pt-12 pb-6 my-5">
            <h3 className="font-semibold text-slate-900">
              Huge GHlobal Network of Fast VPN
            </h3>
            <p className="text-gray-500 font-normal">
              See{" "}
              <span className="font-semibold text-slate-900">EnatelPeru </span>
              everywhere to make it easier for you when you move locations
            </p>
          </div>
          <img
            src="connected_world.svg"
            alt="ilustration"
            className="mx-auto h-[600px] w-[600px]"
          />
        </div>

        {/* Carousel Brands */}
        <div>{/* Name of brands */}</div>

        {/* Section of customer */}
        <div>
          <div className="flex flex-col justify-center items-center my-5">
            <h3 className="font-semibold text-slate-900">
              Trusted by Thousands of Happy Customer
            </h3>
            <p className="text-gray-500 font-normal">
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>

          {/* Carousel of Customers */}
          <div className="flex flex-row gap-4 items-center justify-center py-5">
            {/* Card of customer */}
            <div className="outline outline-gray-300 rounded-md p-4 w-96 h-44 hover:outline-red-500">
              <div className="flex flex-row gap-4 mb-4">
                <img
                  src="https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?size=626&ext=jpg&ga=GA1.2.1948804204.1691457908&semt=sph"
                  alt="person"
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
                <div className="flex-auto flex-col">
                  <h4 className="font-semibold text-slate-900">Viezh Robert</h4>
                  <span className="text-gray-500">Warsaw, Poland</span>
                </div>
                <div className="flex flex-1 items-center justify-end gap-2">
                  <span className="font-semibold text-slate-900">4.5</span>{" "}
                  <RiStarSFill className="text-yellow-400" />
                </div>
              </div>
              <p>
                "Wow... I am very happy to use this VPN, it turnet out to be
                more than my expectations and so far there have been no
                problems. EnatelPeru always the best".
              </p>
            </div>
            {/* Card of customer */}
            <div className="outline outline-gray-300 rounded-md p-4 w-96 h-44  hover:outline-red-500">
              <div className="flex flex-row gap-4 mb-4">
                <img
                  src="https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?size=626&ext=jpg&ga=GA1.2.1948804204.1691457908&semt=sph"
                  alt="person"
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
                <div className="flex-auto flex-col">
                  <h4 className="font-semibold text-slate-900">
                    Yessica Christy
                  </h4>
                  <span className="text-gray-500">Shanxi, China</span>
                </div>
                <div className="flex flex-1 items-center justify-end gap-2">
                  <span className="font-semibold text-slate-900">4.5</span>{" "}
                  <RiStarSFill className="text-yellow-400" />
                </div>
              </div>
              <p>
                "I like it because I like to travel far and still can connect
                with high speed.".
              </p>
            </div>
            {/* Card of customer */}
            <div className="outline outline-gray-300 rounded-md p-4 w-96 h-44  hover:outline-red-500">
              <div className="flex flex-row gap-4 mb-4">
                <img
                  src="https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?size=626&ext=jpg&ga=GA1.2.1948804204.1691457908&semt=sph"
                  alt="person"
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
                <div className="flex-auto flex-col">
                  <h4 className="font-semibold text-slate-900">Viezh Robert</h4>
                  <span className="text-gray-500">Warsaw, Poland</span>
                </div>
                <div className="flex flex-1 items-center justify-end gap-2">
                  <span className="font-semibold text-slate-900">4.5</span>{" "}
                  <RiStarSFill className="text-yellow-400" />
                </div>
              </div>
              <p>
                "This is very unusual for my business that currently requires a
                virtual private network that has high security.".
              </p>
            </div>
          </div>
        </div>

        {/* Card of Newsletter */}
        <div className="flex justify-between items-center bg-white w-[50%] rounded-lg shadow-lg p-16 mx-auto relative top-[80px] z-50">
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
        </div>
      </section>
    </>
  );
};

export default Home;
