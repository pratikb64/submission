import SingleFeature from "./SingleFeature";

const Features = () => {
  return (
    <div className="lg:max-w-[940px] sm:max-w-[80%] mt-24 max-w-xs mx-auto">
      <div className="grid grid-cols-1 gap-16 mt-12 md:gap-4 md:grid-cols-3">
        {featureList.map((feature, index) => (
          <SingleFeature
            image={feature.image}
            name={feature.name}
            desc={feature.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const featureList = [
  {
    image:
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg",
    name: "FEATURE 1",
    desc: "Talk about some of the details of your offer with a focus on the value people get back.",
  },
  {
    image:
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_108c04p00000000000001o.jpg",
    name: "FEATURE 2",
    desc: "Is there a pain point that your service resolves? Tell visitors about it here.",
  },
  {
    image:
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_108c04p00000000000001o.jpg",
    name: "FEATURE 3",
    desc: "Alternatively, you could use this section to address some frequently asked questions.",
  },
];
export default Features;
