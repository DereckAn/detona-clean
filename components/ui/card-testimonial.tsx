import Image, { StaticImageData } from "next/image";
import FixStarRating from "./startratingfix";

interface Testimonial2Props {
  text: string;
  name: string;
  date: string;
  image: StaticImageData;
  stars: number;
}

const Testimonial2 = ({ text, name, date, image, stars }: Testimonial2Props) => {
  return (
    <div className="flex flex-col gap-6 bg-blu2 text-gold p-8 rounded-xl drop-shadow-xl max-w-lg justify-between h-[300px] w-[500px] ">
      <p className="text-gray-80000">{text}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src={image}
            alt="Image"
            fill
            loading="lazy"
            className="object-cover rounded-full ring-4 ring-gray-300 dark:ring-[#0A0A0B]/30"
            sizes="50%"
            placeholder = 'blur'
          />
        </div>
        <div>
          <h3 className="text-blue-700 font-bold text-lg">{name}</h3>
           <FixStarRating stars={stars} />
        </div>
      </div>

      {/* <div>
        <FixStarRating stars={stars} />
      </div> */}
    </div>
  );
};

export default Testimonial2;
