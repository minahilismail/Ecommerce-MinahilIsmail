import bannerImg from "../../assets/images/banner.png";
const Banner: React.FC = () => {
  return (
    <div className="relative md:mx-6 lg:mx-[64px]">
      <img
        className=" md:w-[1315px] md:h-[417px] w-[1315px] h-[417px] object-cover md:rounded-[20px] "
        src={bannerImg}
        alt="banner"
      />
      <div className="absolute md:top-[91px] md:bottom-[63px] md:left-[400px] md:right-[100px] lg:top-[91px] lg:bottom-[63px] lg:left-[797px] lg:right-[149px] top-[91px] bottom-[30px] left-[150px] right-[149px] flex items-center justify-center flex-col gap-[36px]">
        <button className=" flex items-center justify-center px-6 py-4 border border-transparent text-sm font-medium rounded-[20px] shadow-sm text-white bg-primary hover:bg-[#df9b13] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-[45px] w-[134px]">
          New Laptop
        </button>
        <div className=" text-nowrap text-banner font-bold md:text-[38px] lg:text-[41px] text-[33px] leading-[61.5px]">
          Sale up to 50% off
        </div>
        <div className="text-nowrap text-white text-[18px] leading-[27px] font-medium">
          12 inch hd display
        </div>
        <button className="flex items-center justify-center px-6 py-4 border border-transparent text-sm font-medium rounded-[20px] shadow-sm text-white bg-primary hover:bg-[#df9b13] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-[45px] w-[134px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
