import { services } from "@/assets/constants";
import CardServices from "@/components/ui/card-services";
import Container from "@/components/ui/container";
import Link from "next/link";

const Services = () => {
  return (
    <section className="bg-primary py-20">
      <Container>
        <div className="flex justify-between">
          <h2 className="text-2xl">Services</h2>
          <Link className=" underline px-4 py-2 rounded-md text-xl" href={"./services"}>
            VIEW ALL SERVICES
          </Link>
        </div>
        <div className="flex gap-5 rounded-xl md:flex-row flex-col pt-10">
          {services.map((service) => (
            <CardServices key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
