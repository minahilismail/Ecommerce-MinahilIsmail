import cannonCamera from "../../assets/images/cannonCamera.png";
const Home: React.FC = () => {
  return (
    <div className="xxl:pl-[174px] xxl:mx-0 lg:pl-[80px] xxl:pr-[146px] lg:pr-[50px] md:pr-[100px] flex flex-col-reverse md:flex-row items-center justify-center md:justify-normal lg:justify-between md:gap-[145px] xxl:gap-[449px]  bg-white sm:rounded-lg mt-[42px] md:mt-[38px] mx-6 ">
      <div className="w-full md:w-auto flex items-center justify-between">
        <div className="w-full flex flex-col md:items-start items-center justify-center">
          <div className="">
            <div className="flex md:hidden text-[36px] md:text-[43px] leading-9 text-secondary text-center text-nowrap font-bold">
              Canon camera
            </div>
            <div className="hidden md:block text-[36px] md:text-[43px] leading-[64.5px] text-secondary font-bold">
              <div>Canon</div>
              <div>camera</div>
            </div>
          </div>

          <div className="w-full mt-[19px] flex flex-col md:gap-[21px] text-center space-y-[16px] md:flex-row md:space-y-0">
            <button className="w-full md:w-auto items-center text-nowrap justify-center px-[32px] py-[18.5px] border border-transparent text-[16px] font-semibold rounded-[20px] shadow-sm text-white bg-primary hover:bg-brandOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Shop now
            </button>
            <button className="w-full md:w-auto items-center text-nowrap justify-center px-[28.5px] py-[18.5px] border border-brandTeal text-[16px] rounded-[20px] font-semibold shadow-sm text-brandTeal bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
              View more
            </button>
          </div>

          <div className="hidden md:flex gap-[8px] ml-[122px] mt-[49px]">
            <div className="h-[16px] w-[16px] border border-carouselDotsClr bg-primary rounded-full"></div>
            <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full "></div>
            <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full "></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center">
          <div className="relative flex-shrink-0 items-center justify-center">
            <img
              className="h-[311px] w-[289.16px] sm:h-[300px] sm:w-[270.16px]  lg:h-[335px] lg:w-[345px] md:h-[310px] md:w-[290px] items-center object-contain"
              src={cannonCamera}
              alt="Canon camera"
            />
            <div className="ml-1 absolute left-36 bottom-6 lg:left-60 lg:bottom-12 md:left-[190px] md:bottom-[35px] rounded-[588.94px] md:w-[104.83px] md:h-[100.12px] sm:w-[99.83px] sm:h-[95.12px] w-[90.81px] h-[86.10px] bg-primary">
              <div className="text-[15px] sm:text-[21.57px] top-6 relative leading-12 text-white text-center items-center justify-center font-semibold">
                <div>only</div>
                <div>$89</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
