'use client';

import { informationservice2, services2 } from "@/assets/constants";
import CardServicesDetails from "./card-sevices-details";
import { useState } from "react";
import CleanService from "./clean-service";

const CardsServicesDetails = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | 0>(0);

  const handleCardClick = (index: number) => {
    setSelectedServiceIndex(index);
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 items-center justify-center py-20  ">
        {services2.map((service, index) => (
          <CardServicesDetails
            key={service.title}
            onclick={() => handleCardClick(index)}
            icon={service.icon}
            image={service.image}
            list={service.list}
            title={service.title}
          />
        ))}
      </div>

      {informationservice2[selectedServiceIndex].map((info, index) => (
        <CleanService
          key={info.title}
          id={index}
          description={info.description}
          image={info.image}
          title={info.title}
        />
      ))}
    </>
  );
};

export default CardsServicesDetails;
