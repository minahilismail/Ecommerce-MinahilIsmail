import cannonCamera from "../../assets/images/cannonCamera.png";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-around md:gap-[100px] lg:gap-[477px] bg-white sm:rounded-lg mt-8">
      <div className="w-full md:w-auto py-5 flex items-center justify-between mx-auto">
        <div className="w-full flex flex-col md:items-start items-center justify-center mx-6">
          <div className="">
            <div className="block md:hidden text-[36px] md:text-[43px] leading-9 text-secondary text-center font-extrabold">
              Canon camera
            </div>
            <div className="hidden md:block text-[36px] md:text-[43px] leading-[64.5px] text-secondary font-extrabold">
              <div>Canon</div>
              <div>camera</div>
            </div>
          </div>

          <div className="w-full mt-5 flex flex-col text-center space-y-3 md:flex-row md:space-y-0 md:space-x-3 md:mx-0">
            <button className="w-full md:w-auto items-center justify-center px-6 py-4 border border-transparent text-sm font-medium rounded-[15px] shadow-sm text-white bg-primary hover:bg-brandOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Shop now
            </button>
            <button className="w-full md:w-auto ml-0 md:ml-3 items-center justify-center px-6 py-4 border border-[#316887] text-sm rounded-[15px] font-medium shadow-sm text-[#316887] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
              View more
            </button>
          </div>

          <div className="hidden md:flex gap-2  mt-[49px]">
            <div className="h-[16px] w-[16px] border border-[#ADADAD] bg-primary rounded-full ml-[90px]"></div>
            <div className="h-[16px] w-[16px] border border-[#ADADAD] rounded-full "></div>
            <div className="h-[16px] w-[16px] border border-[#ADADAD] rounded-full "></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-6 flex items-center mx-16">
          <div className="relative flex-shrink-0">
            <img
              className="h-[250px] w-[210px] sm:h-[300px] sm:w-[270.16px] lg:h-[335px] lg:w-[345px] md:h-[310px] md:w-[290px] items-center object-contain"
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
