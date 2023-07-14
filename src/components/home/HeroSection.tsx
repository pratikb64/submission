const HeroSection = () => {
  return (
    <div>
      <div className="bg-[url(https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_10wt0ep0go0ep00000001o.jpg)] sm:bg-[url('http://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg')] bg-cover min-h-[530px] lg:h-[720px] bg-center">
        <div className="flex flex-col gap-6 lg:gap-12 pt-8 lg:pt-[82px] max-w-[300px] sm:max-w-[90%] lg:max-w-[940px] mx-auto">
          <img
            className="w-28 lg:w-36"
            src="//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
            alt="logo"
          />
          <span className="text-5xl tracking-tighter md:text-[82px] max-w-2xl font-semibold text-primary">
            Describe the value of booking an appointment
          </span>
          <span className="max-w-lg text-lg leading-6 sm:text-xl">
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
