import { informationservice2 } from "@/assets/constants";
import CardsServicesDetails from "@/components/ui/cards-services-details";
import CleanService from "@/components/ui/clean-service";
const Services = () => {
  return (
    <div className="bg-goldf sm:mt-[104px]  w-full text-gold  ">
      <div className="flex flex-col items-center justify-center space-y-3  py-20 bg-blu mt-[18vw] sm:mt-0  ">
        <h1 className="text-5xl font-bold ">PROFESSIONAL SERVICES</h1>
        <h2>What We Provide</h2>
      </div>
      <CardsServicesDetails />
      
      {/* {informationservice2[0].map((info, index) => (
        <CleanService
          key={info.title}
          id={index}
          description={info.description}
          image={info.image}
          title={info.title}
        />
      ))} */}
    </div>
  );
};

export default Services;
