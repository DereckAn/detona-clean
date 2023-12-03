
interface CardAbilitiesProps {
    id: string;
    title: string;
    description: string;
};

const CardAbilities = ({id, title, description} : CardAbilitiesProps) => {
  return (
    <div className=" space-y-3 ">
      <h3 className="text-blue-500 text-xl">{id}</h3>
      <h2 className="text-2xl font-light">{title}</h2>
      <p className="max-w-sm lg:max-w-none pb-5">
       {description}
      </p>
      <hr className="max-w-sm"/>
    </div> 
  );
};

export default CardAbilities;
