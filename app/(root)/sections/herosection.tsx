import { sl } from "@/assets/images";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white  flex items-center relative sm:mt-[104px] justify-center">
      <Image
        src={sl}
        alt="hero image"
        fill
        className=" z-0 absolute w-full "
        sizes="100%"
        placeholder="blur"
      />
      <div className="absolute w-full h-full bg-black opacity-20 z-10"></div>

      <div className="realtive z-10 my-20 flex justify-center h-[550px]">
        <div
          className="space-y-10 py-10 px-5  rounded-2xl text-gold text-center flex  flex-col justify-center "
          id="hola"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(2, 25, 48, 0.2)",
          }}
        >
          <h1 className="text-7xl font-black tracking-wide text-center">
            Detona Clean
          </h1>
          <p className="poppins text-2xl ">Your Ultimate Cleaning Solutions</p>
          <p className="poppins  text-clip max-w-xl">
            We offer cleaning services for office buildings, turnover rentals,
            carpet cleaning, janitorial services, and more. We customize our
            services to meet your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
