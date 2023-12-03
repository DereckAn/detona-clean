import { sl } from "@/assets/images";
import Image from "next/image";

const VisionMision = () => {
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
        className="flex flex-col rounded-2xl z-10 max-w-2xl lg:max-w-5xl "
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(2, 25, 48, 0.4)",
        }}
      >
        <div className=" rounded-t-2xl  basis-1/2 text-white flex flex-col justify-center items-start space-y-5 py-10 sm:py-52 px-5 sm:px-20 lg:px-52">
          <h3 className="md:text-7xl text-xl text-ellipsis font-bold max-w-xl">
            Vision
          </h3>
          <p className="text-left md:text-xl max-w-xl ">
            Vision is the perfect word for cleaning; we are trained and
            qualified to see every place as the final customer usually sees it.
            We want to grow and show what is cleaning because we deliver above
            expectations. We tend and always strive to walk a second mile.
          </p>
        </div>
        <hr className="absolute -inset-x-20 pt-80 z-10 inset-1/2" />
        <div className=" rounded-b-2xl basis-1/2 text-gold flex flex-col justify-center items-end space-y-5 py-10 sm:py-52 px-5 sm:px-20 lg:px-52">
            
          <h3 className="md:text-7xl text-xl text-ellipsis font-bold max-w-xl ">
            Mission
          </h3>
          <p className="md:text-xl max-w-xl text-right">
            Our mission is to ensure that customers feel comfortable and safe
            when they walk into one of your buildings. While they use bathrooms
            or commum areas, they know that cleaners do the cleaning. Our
            mission is to ensure that the employees feel relaxed and have the
            peace of mind to show confidence in their job site. We quickly work
            the extra mile to ensure we do better than expected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMision;
