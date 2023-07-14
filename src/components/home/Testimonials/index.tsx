import SingleTestimonial from "./SingleTestimonial";

const Testimonials = () => {
  return (
    <div className="lg:max-w-[940px] sm:max-w-[80%] max-w-xs mx-auto">
      <div className="my-24 text-sm font-semibold text-center text-secondary">
        DON'T JUST TAKE OUR WORD FOR IT
      </div>
      <div className="grid grid-cols-1 gap-16 mt-12 lg:gap-2 md:grid-cols-2">
        {testimonialsList.map((testimonial, index) => (
          <SingleTestimonial
            personImage={testimonial.personImage}
            personName={testimonial.personName}
            personLocation={testimonial.personLocation}
            testimonial={testimonial.testimonial}
            stars={testimonial.stars}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const testimonialsList = [
  {
    stars:
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg",
    personImage:
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg",
    testimonial:
      "Share a real testimonial that hits some of your benefits (but isn't too sales-y).",
    personName: "Real Name",
    personLocation: "Location",
  },
  {
    stars:
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d441dac-multor-testimonial2-stars.svg",
    personImage:
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/94045dbc-multor-testimonial2-headshot_101e01e00000000000001o.jpg",
    testimonial:
      "Include someone talking about how easy it was to sign up and participate.",
    personName: "Real Name",
    personLocation: "Location",
  },
];

export default Testimonials;
