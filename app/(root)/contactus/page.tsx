import CardContacUs from "@/components/ui/card-contactus";
import HeaderContactUS from "./sections/header-contactus";

const ContactUs = () => {
  return (
    <>
      <HeaderContactUS />
      <div
        className="lg:flex-row flex-col-reverse
    flex gap-10  py-20 justify-center bg-primary"
      >
        <CardContacUs />
      </div>
    </>
  );
};

export default ContactUs;
