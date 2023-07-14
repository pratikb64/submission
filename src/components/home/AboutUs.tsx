const AboutUs = () => {
  return (
    <div className="flex flex-col mx-auto my-20 gap-4 sm:flex-row w-72 sm:w-[80%] md:max-w-[940px]">
      <div className="mb-12 sm:w-1/2">
        <img
          className="w-full"
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_108c07900000000000001o.jpg"
          alt="about-us image"
        />
      </div>
      <div className="flex items-center justify-center sm:w-1/2 sm:p-6">
        <div className="w-80">
          <div className="text-sm font-semibold text-secondary">ABOUT</div>
          <div className="my-6 text-2xl font-semibold sm:text-xl lg:text-3xl sm:my-3">
            Some more information about your business
          </div>
          <div className="text-xs sm:text-sm">
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
