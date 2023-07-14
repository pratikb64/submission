const Benefits = () => {
  return (
    <div className="p-2 mt-12 lg:mt-16">
      <div className="flex flex-col max-w-xs gap-8 mx-auto lg:max-w-md lg:gap-12">
        {benefitsList.map((benefit, index) => (
          <div className="flex gap-4" key={index}>
            <div className="w-12">
              <img
                className="w-full"
                src={benefit.icon}
                alt={benefit.title + " icon"}
              />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const benefitsList = [
  {
    icon: "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg",
    title: "Benefit 1",
    desc: "Highlight the benefits of signing up for an appointment, online class, or video consultation.",
  },
  {
    icon: "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg",
    title: "Benefit 2",
    desc: "For example, fitness instructors might describe how their routines make people healthier *and* happier.",
  },
  {
    icon: "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg",
    title: "Benefit 3",
    desc: "Remind visitors how easy it is to claim your offer and start enjoying the benefits.",
  },
];

export default Benefits;
