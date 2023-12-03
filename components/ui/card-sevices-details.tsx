// "use client";

import Image, { StaticImageData } from "next/image";
interface CardServicesDetailsProps {
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  list: string[];
  onclick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const CardServicesDetails = ({
  image,
  icon,
  title,
  list,
  onclick,
}: CardServicesDetailsProps) => {
  return (
    <div onClick={onclick} className="group cursor-pointer content-around bg-blu2 rounded-2xl hover:bg-blu hover:border-4 hover:border-gold border-transparent border-4">
      <div className=" p-5">
        <div className="rounded-2xl  overflow-hidden w-80 group-hover:border-4 group-hover:border-gold ">
          <Image
          priority
            src={image}
            alt="service"
            className="rounded-2xl group-hover:scale-110 transition-all duration-300 ease-in-out "
          />
        </div>
      </div>

      <div className=" flex items-center justify-center py-6 ">
        <div className="flex flex-col items-center justify-center gap-y-5">
          <div className="w-20  ">
            <Image src={icon} alt="service" className="rounded-2xl " />
          </div>
          <div className="text-gold ">
            <h2 className="text-3xl font-bold  ">{title}</h2>
            <ul className="custom-list ">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServicesDetails;
