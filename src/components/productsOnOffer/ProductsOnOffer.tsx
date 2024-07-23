import Speakers from "../../assets/images/speakers.png";
import remoteControl from "../../assets/images/remoteControl.png";
import laptop from "../../assets/images/laptop.png";
import Star from "../star/Star";
import { ShoppingCart } from "iconsax-react";
import { Eye } from "iconsax-react";
import { TIME } from "../../constants/products";

const OfferProducts: React.FC = () => {
  return (
    <div className="hidden lg:flex mx-6 lg:ml-[51px] mr-[61px] gap-[30.84px] mb-[75px] mt-[94px] items-center justify-center">
      <div
        className="basis-3/5 relative rounded-[20px] px-[29px] py-[62.5px] border border-borderClr6 overflow-hidden shadow-lg"
        style={{ height: "505px" }}
      >
       
          <div className="flex gap-[62px] items-center justify-center overflow-hidden">
            <div className="flex items-center justify-center">
              <img
                className="object-contain"
                src={Speakers}
                style={{ width: "345px", height: "380px" }}
                alt="Card Image"
              />
            </div>

            <div className="flex flex-col text-left justify-start gap-[37px] text-secondary">
              <div className="flex flex-col gap-[15.74px]">
              <div className="font-semibold truncate text-[21.09px] leading-[31.64px]">
                JBL bar 2.1 deep bass
              </div>
              <div className="font-semibold text-textClr1 text-[17.09px]">
                $11,70
              </div>
              <div className="font-semibold text-border1">
                <Star stars={5} />
              </div>
              </div>
              <div className="flex gap-[10px]">
                {TIME.map((time, index) => (
                  <div
                    key={index}
                    className="bg-quality h-[78px] w-[77px] rounded-[500px] text-primary flex items-center justify-center text-[22.09px] leading-[33.14px] font-bold"
                  >
                    {time}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[20.65px]">
                <div className="py-[18px] pr-[19.67px] pl-[25.57px] flex items-center justify-between w-[204.58px] h-[60px] rounded-[19.67px] bg-skyBlueClr">
                  <div className="text-cartBrownClr font-semibold text-[15.74px] leading-[23.6px]">
                    Add to cart
                  </div>
                  <div className="bg-primary h-[30.49px] w-[30.49px] rounded-[491.77px] flex items-center justify-center">
                    <ShoppingCart className="text-white h-[17.21px] w-[17.21px]" />
                  </div>
                </div>
                <div className=" flex items-center justify- pl-[25.75px] pr-[21.64px] py-[18.2px] rounded-[19.67px] bg-skyBlueClr">
                  <Eye className="h-[23.6px] w-[23.6px] text-black" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-[36px] gap-2 mt-[7.5px]">
            <div className="h-[16px] w-[16px] border border-carouselDotsClr bg-primary rounded-full"></div>
            <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full "></div>
          </div>
        </div>
    
      <div className="basis-2/5 flex flex-col gap-[23px]">
        <div
          className="relative rounded-[19.67px] py-[36.14px] px-[21.85px] border border-borderClr6 overflow-hidden shadow-lg"
          style={{ height: "241px" }}
        >
          <div className="flex items-center gap-[50px] ">
            
              <img
                className="object-contain"
                src={remoteControl}
                style={{ width: "282.28px", height: "168.18px" }}
                alt="Card Image"
              />
            

            <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary">
              <div className="font-semibold truncate text-[21.09px]">
                Play game
              </div>
              <div className="font-semibold text-textClr1 text-[17.09px]">
                $11,70
              </div>
              <div className="font-semibold text-border1">
                <Star stars={5} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-[19.67px] pt-[38px] pb-[34.82px] pl-[20.99px] pr-[21.85px] border border-borderClr6 overflow-hidden shadow-lg"
          style={{ height: "241px" }}
        >
          <div className="flex items-center gap-[50px] ">
            
              <img
                className="object-contain"
                src={laptop}
                style={{ width: "282.28px", height: "168.18px" }}
                alt="Card Image"
              />
          

            <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary">
              <div className="font-semibold truncate text-[21.09px]">
                Play game
              </div>
              <div className="font-semibold text-textClr1 text-[17.09px]">
                $11,70
              </div>
              <div className="font-semibold text-border1">
                <Star stars={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferProducts;
