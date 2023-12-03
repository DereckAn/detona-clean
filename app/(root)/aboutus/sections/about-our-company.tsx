import { sl } from "@/assets/images";
import Image from "next/image";

const AboutOurCompany = () => {
  return (
    <div className="p-20 flex items-center justify-center relative" >
      <Image
        src={sl}
        alt="hero image"
        fill
        sizes="100%"
        placeholder="blur"
        className=" z-0 absolute w-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-20 z-10"></div>


      <div className="flex flex-col rounded-2xl z-10 max-w-2xl lg:max-w-5xl ">
        <div
          className="bg-transparent rounded-t-2xl pl-5 items-center justify-start flex"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(2, 25, 48, 0.2)",
          }}
        >
          <h2 className="md:text-7xl text-4xl  text-left md:text-center font-extrabold text-gold max-w-xl py-10 sm:py-52 px-5 sm:px-20 lg:px-52">
            About Our Company
          </h2>
        </div>
        <div className="bg-blu rounded-b-2xl  text-gold flex flex-col justify-center items-start space-y-5 py-10 sm:py-52 px-5 sm:px-20 lg:px-52">
          <h3 className="md:text-3xl text-xl text-ellipsis font-bold max-w-xl">A Brief Story About The Company</h3>
          <p className="text-left md:text-xl max-w-xl">
            We offer cleaning services for office buildings, turnover rentals,
            carpet cleaning, janitorial services, and more. We customize our
            services to meet your specific needs. Please ask us about daily,
            weekly, and bi-weekly services. Contracts welcome.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutOurCompany;
