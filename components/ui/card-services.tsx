import Image, { StaticImageData } from "next/image";

interface CardServicesProps {
  image: StaticImageData;
  title: string;
}

const CardServices = ({ image, title }: CardServicesProps) => {
  return (
    <div className="space-y-5 ">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="room"
          className="rounded-xl hover:scale-110 transition-all duration-300 ease-in-out"
          sizes="50%"
          placeholder="blur"
        />
      </div>
      <h3 className="text-center text-xl"> {title} </h3>
    </div>
  );
};

export default CardServices;
