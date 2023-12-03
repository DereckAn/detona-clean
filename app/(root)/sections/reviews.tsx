import { reviews } from "@/assets/constants";
import Testimonial2 from "@/components/ui/card-testimonial";
import Container from "@/components/ui/container";

const Reviews = () => {
  return (
    <section className="bg-primary py-20 ">
      <Container className="space-y-5 w-full">
        <div className=" flex items-center justify-center ">
          <h2 className="text-4xl font-extrabold">
            Our Customers speak for us
          </h2>
        </div>
      </Container>
      <div className="py-10 logos2 ">
        <div className="flex gap-5 py-10 logos-slide2">
          {reviews.map((review) => (
            <div key={review.text} className="">
              <Testimonial2  {...review} />
            </div>
          ))}
          {reviews.map((review) => (
            <div key={review.name} className="">
              <Testimonial2  {...review} />
            </div>
          ))}
       
        </div>
      </div>
      <div className="flex items-center justify-center py-5 ">
        <p className="text-xl font-bold">
          5.0 average rating from 1814 reviews
        </p>
      </div>
    </section>
  );
};

export default Reviews;
