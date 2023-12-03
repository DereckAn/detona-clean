import { room } from "@/assets/images";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-blu py-14">
      <Container>
        <div className="flex gap-6 flex-col md:flex-row ">
          <div className="relative w-92  basis-1/2 flex justify-end pr-10 rounded-xl">
            <Image
              src={room}
              alt="hero image"
              className="rounded-xl"
              sizes="100%"
              // priority={true}
              placeholder = 'blur'
            />
          </div>
          <div className="basis-1/2 max-w-md space-y-5 flex flex-col justify-center text-gold">
            <h2 className="text-4xl tracking-wider">A Brief Story About Us</h2>
            <p className="font-light  ">
              We started our cleaning business in the early 20s in Provo, UT;
              our first job was carpet cleaning. Then, we found that companies
              were seeking better cleaning quality, so we added cleaning and
              janitorial services to our portfolio. But since then, we&apos;ve
              been able to serve property management companies, Airbnbs, and
              Student housing. First, we wanted to deliver results that exceeded
              our client&apos;s expectations. We have known since the beginning
              that customer success is always our success, so we are committed
              to quality and responsibility. We always promise quality, reliable
              cleaning service so our loyal customers feel special. We work hard
              to be the best. Our products are high-quality and safe. And we
              focus on the details so you have a clean, orderly home or office
              every time.
            </p>
            <div className="flex justify-start">
              <Link
                className=" underline hover:text-blue-600"
                href={"./aboutus"}
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
