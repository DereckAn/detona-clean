import { cardinfo } from "@/assets/constants";
import { sl } from "@/assets/images";
import CardContact from "@/components/ui/card-information";
import Image from "next/image";

const ThankYou = () => {
  return (
    <div className="p-20 flex items-center justify-center relative ">
      <Image
        src={sl}
        alt="hero image"
        fill
        sizes="100%"
        placeholder="blur"
        className=" z-0 absolute w-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-20 z-10"></div>

      <div className="flex flex-col rounded-2xl z-10 max-w-2xl lg:max-w-5xl bg-blu text-gold  ">
        <div className=" rounded-t-2xl  basis-1/2  flex flex-col justify-center items-start space-y-10 py-10 sm:py-52 px-5 sm:px-20 lg:px-52">
          <h3 className="md:text-7xl text-2xl text-ellipsis font-bold ">
            Thank You
          </h3>
          <h4>Because, we&apos;re here to help</h4>
          <p className="text-left md:text-xl max-w-xl">
            We are so thankful for the opportunity to serve your company; We
            can&apos;t wait for our future working together. Thanks for
            supporting us.
          </p>
          <p>Maxwell Belarmino - CEO</p>
          {cardinfo.map((card) => (
            <CardContact
              key={card.name}
              title={card.name}
              info={card.info}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
