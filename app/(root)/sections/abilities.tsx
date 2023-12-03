import { abilities } from "@/assets/constants";
import CardAbilities from "@/components/ui/card-abilities";

const Abilities = () => {
  return (
    <section className="bg-blu text-gold">
      <div className="grid md:grid-cols-2  gap-5 px-20 ">
        {abilities.map((ability) => (
            <CardAbilities key={ability.id} {...ability} />
        ))}
      </div>
    </section>
  );
};

export default Abilities;
