type SingleFeature = {
  image: string;
  name: string;
  desc: string;
};

const SingleFeature = (props: SingleFeature) => {
  const { desc, image, name } = props;
  return (
    <div className="w-72 sm:w-[60%] md:w-full mx-auto">
      <div>
        <img className="w-full" src={image} alt={name + " image"} />
      </div>
      <div className="mt-8 mb-4 text-lg font-semibold">{name}</div>
      <div>{desc}</div>
    </div>
  );
};

export default SingleFeature;
