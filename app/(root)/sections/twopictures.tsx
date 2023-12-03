import { cardclean } from "@/assets/constants";
import CardClean from "@/components/ui/card-clean";

const TwoPictures = () => {
  return (
    <section className="flex py-20 px-5 flex-col md:flex-row items-center justify-center gap-10 bg-blu2 ">
      {cardclean.map((card) => (
        <CardClean {...card} key={card.title} />
      ))}

    </section>
  );
};

export default TwoPictures;
