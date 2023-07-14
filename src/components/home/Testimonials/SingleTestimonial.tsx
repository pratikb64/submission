type SingleTestimonial = {
  stars: string;
  personImage: string;
  testimonial: string;
  personName: string;
  personLocation: string;
};

const SingleTestimonial = (props: SingleTestimonial) => {
  const { stars, personImage, testimonial, personName, personLocation } = props;

  return (
    <div className="mx-auto w-72">
      <img className="w-16" src={stars} alt="stars" />
      <div className="my-2 text-2xl italic">{testimonial}</div>
      <div className="flex items-center gap-4 mt-8">
        <div>
          <img
            src={personImage}
            className="w-12"
            alt={personImage + " image"}
          />
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <span className="font-bold">{personName}</span>
          <span>{personLocation}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
