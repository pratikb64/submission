const MiddleSection = () => {
  return (
    <div className="py-40 my-20 text-center lg:mb-72 md:mb-36 bg-secondary/10">
      <div className="max-w-lg mx-auto mb-12">
        <div className="text-3xl font-semibold lg:text-5xl">
          Show visitors what they're signing up for
        </div>
        <div className="mt-8 text-xl">
          Include a video or photo from one of your sessions to help people
          understand your service (or just to hype ‘em up).
        </div>
      </div>
      <div className="max-w-[95%] lg:max-w-4xl mx-auto -mb-[25%] xl:-mb-[288px]">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube-nocookie.com/embed/Y7cpCDlRfV0?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MiddleSection;
