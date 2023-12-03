import Image, { StaticImageData } from "next/image";

interface CardCleanProps {
  title: string;
  image: StaticImageData;
  description: string;
}

const CardClean = ({ title, image, description }: CardCleanProps) => {
  return (
    <div className=" flex relative rounded-xl h-96 w-full items-center justify-center group">
      <Image
        src={image}
        alt="hero image"
        fill
        className=" z-0 absolute rounded-xl  w-full object-cover"
        sizes="100%"
        placeholder="blur"
      />
      <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-40 group-hover:rounded-xl z-10"></div>
      <div className="relative z-10 my-20 flex flex-col space-y-5 items-center justify-center">
        <h1 className="text-7xl font-black text-white tracking-wide ">
          {title}{" "}
        </h1>
        <button className="bg-transparent text-white px-5 py-2 rounded-xl ml-5 border-2 group-hover:bg-white group-hover:text-black  z-0">
          {description}
        </button>
      </div>
    </div>
  );
};

export default CardClean;
