import { tecnologies } from "@/assets/constants";

const Compoanies = () => {
  return (
    <div className="py-12 bg-primary">
      <div className="logos py-4">
        <div className="logos-slide">
          {tecnologies.map((item) => (
            <item.icon key={item.name} size={50} />
          ))}
        </div>
        <div className="logos-slide ">
          {tecnologies.map((item) => (
            <item.icon key={item.name} size={50} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compoanies;
