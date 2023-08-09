// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RiCheckLine } from "react-icons/ri";

interface IPlan {
  title: string;
  features: { feature: string }[];
  price: number;
  speed: number;
}

const Plan = ({ title, price, speed }: IPlan) => {
  return (
    <div className="outline outline-1 outline-gray-500 w-fit py-12 px-24">
      <div className="flex flex-col justify-center items-center mb-5 gap-2">
        <img src="order_delivered.svg" alt="order" className="w-44 h-44" />
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>
      {/* <div>
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
      </div> */}
      <div className="flex flex-col items-center justify-center mt-24 gap-4">
        <h3 className="font-semibold text-slate-900 text-2xl">
          <sup>S/</sup>
          {price}
        </h3>
        <h3 className="font-semibold text-slate-900 text-2xl">{speed} MB</h3>
        <a
          href={`"https://api.whatsapp.com/send?phone=941946962&amp;text=Quisiera saber más sobre el plan ${title} de ${speed} MBPS de S/${price}"`}
          className="px-4 py-1 rounded-xl font-semibold text-red-500 outline outline-1 outline-red-500"
        >
          {/* Seleccionar */} Saber Más
        </a>
      </div>
    </div>
  );
};

export default Plan;
