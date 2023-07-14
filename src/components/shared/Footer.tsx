const Footer = () => {
  return (
    <div className="px-4 py-8 bg-primary lg:px-0 sm:p-12">
      <div className="flex max-w-[940px] mx-auto flex-col gap-4 sm:flex-row sm:justify-between items-center">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
          alt="logo"
          className="w-24"
        />
        <span className="text-xs text-[#a2acac]">
          © 2020 Insert Name Here. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
