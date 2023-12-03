import { sl } from "@/assets/images";
import Image from "next/image";

const Strenth = () => {
  return (
    <div className="p-20 flex items-center justify-center relative overflow-x-hidden">
      <Image
        src={sl}
        alt="hero image"
        fill
        sizes="100%"
        placeholder="blur"
        className=" z-0 absolute w-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-20 z-10"></div>

      <div
        className="flex flex-col rounded-2xl z-10 max-w-2xl lg:max-w-5xl bg-gold opacity-90  "
      >
        <div className=" rounded-t-2xl  basis-1/2 text-white flex flex-col justify-center items-start space-y-10 py-10 sm:py-52 px-5 sm:px-20 lg:px-52">
          <h3 className="md:text-7xl text-2xl text-ellipsis font-bold ">
            Strength
          </h3>
          <ul className="poppins text-left max-w-2xl text-xl custom-list space-y-3  ">
            <li>Better prices (We cover the offer of the competition)</li>
            <li>Qualified team workers</li>
            <li>Nice equipment</li>
            <li>Flexibility on clients&apos; necessities</li>
            <li>24h service operation*</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Strenth;
