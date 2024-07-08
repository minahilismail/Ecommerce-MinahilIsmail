import Speakers from "../../assets/images/speakers.png";
import remoteControl from "../../assets/images/remoteControl.png";
import laptop from "../../assets/images/laptop.png";
import Star from "../star/Star";
import { ShoppingCart } from "iconsax-react";
import { Eye } from "iconsax-react";

const OfferProducts: React.FC = () => {
  return (
    <div className="hidden lg:flex mx-6 lg:mx-[51px] gap-[30.84px] mb-[75px] mt-[94px] items-center justify-center">
      <div
        className="basis-3/5 relative rounded-[20px] p-6 border border-borderClr6 overflow-hidden shadow-lg"
        style={{ height: "505px" }}
      >
        <div>
          <div className="flex space-y-4 overflow-hidden">
            <div className="flex items-center justify-center">
              <img
                className="object-contain"
                src={Speakers}
                style={{ width: "260px", height: "380px" }}
                alt="Card Image"
              />
            </div>

            <div className="flex flex-col text-left justify-start gap-[37px] text-secondary">
              <div className="font-semibold truncate text-[21.09]">
                JBL bar 2.1 deep bass
              </div>
              <div className="font-semibold text-textClr1 text-[17.09px]">
                $11,70
              </div>
              <div className="font-semibold text-border1">
                <Star stars={5} />
              </div>
              <div className="flex gap-[10px]">
                <div className="bg-quality h-[78px] w-[77px] rounded-[500px] text-primary flex items-center justify-center text-[22.09px] font-bold">
                  57
                </div>
                <div className="bg-quality h-[78px] w-[77px] rounded-[500px] text-primary flex items-center justify-center text-[22.09px] font-bold">
                  11
                </div>
                <div className="bg-quality h-[78px] w-[77px] rounded-[500px] text-primary flex items-center justify-center text-[22.09px] font-bold">
                  33
                </div>
                <div className="bg-quality h-[78px] w-[77px] rounded-[500px] text-primary flex items-center justify-center text-[22.09px] font-bold">
                  59
                </div>
              </div>

              <div className="flex items-center gap-[9.84px]">
                <div className="py-18 px-5 flex items-center justify-between w-[204.58px] h-[60px] rounded-[19.67px] bg-skyBlueClr">
                  <div className="text-cartBrownClr font-semibold text-[15.74px] leading-[23.6px]">
                    Add to cart
                  </div>
                  <div className="bg-primary h-[30.49px] w-[30.49px] rounded-[491.77px] flex items-center justify-center">
                    <ShoppingCart className="text-white h-[17.21px] w-[17.21px]" />
                  </div>
                </div>
                <div className=" flex items-center justify-center w-[70.81px] h-[60px] rounded-[19.67px] bg-skyBlueClr">
                  <Eye className="h-[23.6px] w-[23.6px] text-black" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center mb-5 gap-2 mt-[49px]">
            <div className="h-[16px] w-[16px] border border-carouselDotsClr bg-primary rounded-full ml-[90px]"></div>
            <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full "></div>
          </div>
        </div>
      </div>
      <div className="basis-2/5 flex flex-col gap-[23px]">
        <div
          className="relative rounded-[19.67px] p-6 border border-borderClr6 overflow-hidden shadow-lg"
          style={{ height: "241px" }}
        >
          <div className="flex space-y-4 ">
            <div className="flex items-center justify-center">
              <img
                className="object-contain"
                src={remoteControl}
                style={{ width: "282.28px", height: "168.18px" }}
                alt="Card Image"
              />
            </div>

            <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary">
              <div className="font-semibold truncate text-[21.09]">
                JBL bar 2.1 deep bass
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
          className="relative rounded-[19.67px] p-6 border border-borderClr6 overflow-hidden shadow-lg"
          style={{ height: "241px" }}
        >
          <div className="flex space-y-4 ">
            <div className="flex items-center justify-center">
              <img
                className="object-contain"
                src={laptop}
                style={{ width: "282.28px", height: "168.18px" }}
                alt="Card Image"
              />
            </div>

            <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary">
              <div className="font-semibold truncate text-[21.09]">
                JBL bar 2.1 deep bass
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
