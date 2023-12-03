import { planty } from "@/assets/images";
import Container from "@/components/ui/container";
import Image from "next/image";

const FriendlyEnviroment = () => {
  return (
    <section className="bg-blu py-20 text-gold">
      <Container className="flex items-center justify-evenly flex-col-reverse md:flex-row mg:gap-0 gap-8">
        <p className="max-w-lg text-lg">
          At Detona Clean, we are committed to sustainability. Our products are
          designed to last, reducing waste and environmental impact. Our
          cleaning solutions are eco-friendly, ensuring a safe and healthy home
          for you and your family.
        </p>
        <Image src={planty} alt="plantita" className="rounded-full w-60 border-4 border-gold" />
      </Container>
    </section>
  );
};

export default FriendlyEnviroment;
