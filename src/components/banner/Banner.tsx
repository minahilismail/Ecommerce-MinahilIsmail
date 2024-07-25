import bannerImg from "../../assets/images/banner.png";
const Banner: React.FC = () => {
  return (
    <div className="relative md:mx-6 xxl:ml-[64px] xxl:mr-[61px]">
      <img
        className=" md:w-[1315px] md:h-[417px] w-[1315px] h-[417px] object-cover md:rounded-[20px] "
        src={bannerImg}
        alt="banner"
      />
      <div className="absolute md:top-[91px] md:bottom-[63px] md:left-[400px] md:right-[100px] xxl:top-[91px] xxl:bottom-[63px] xxl:left-[797px] xxl:right-[149px] top-[91px] bottom-[30px] left-[150px] right-[149px] flex items-center justify-center flex-col gap-[12px] md:gap-[36px]">
        <button className=" flex items-center justify-center px-[18.87px] md:px-[26.5px] py-[12px] border border-transparent text-[14.09px] leading-[21.14px] text-nowrap font-medium rounded-[20px] shadow-sm text-white bg-primary hover:bg-brandOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-[45px] w-[134px]">
          New Laptop
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center text-nowrap text-banner font-bold md:text-[38px] lg:text-[41px] text-[41px] leading-[55px] md:leading-[61.5px]">
          <p>Sale up to &nbsp;</p>
           <p>50% off</p>
        </div>
        <div className="text-nowrap text-white text-[18px] leading-[27px] font-medium">
          12 inch hd display
        </div>
        <button className="flex items-center justify-center px-[24.37px] md:px-[32px] py-[12px] border border-transparent text-[14.09px] leading-[21.14px] text-nowrap font-medium rounded-[20px] shadow-sm text-white bg-primary hover:bg-brandOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-[45px] w-[134px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
