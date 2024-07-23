import { BoxTick } from "iconsax-react";
import { Crown } from "iconsax-react";
import { ShieldSecurity } from "iconsax-react";

const QualityFeatures: React.FC = () => {
  return (
    <div className="md:py-[44.5px] py-[33px] md:h-[155px] bg-quality md:rounded-[20px] md:mx-[30px] lg:ml-[51px] lg:mr-[61px] flex md:flex-row flex-col lg:gap-[104px] md-gap-[30px] gap-[42.5px] lg:px-[118px] px-[26px] md:mt-[75px] mb-[27px] md:mb-[75px]">
      <div className="flex gap-[31px] lg:gap-[31px] md:gap-[10px] items-center">
        <div>
          <BoxTick
            color="#EDA415"
            variant="Bold"
            className="w-[67px] h-[67px]"
          />
        </div>
        <div className="text-navColor">
          <div className="font-semibold text-[22.09px] leading-[33.14px]">
            Free delivery
          </div>
          <div className="">on order above $50,00</div>
        </div>
      </div>

      <div className="flex gap-[31px] items-center">
        <div>
          <Crown color="#EDA415" variant="Bold" className="w-[67px] h-[67px]" />
        </div>
        <div className="text-navColor">
          <div className="font-semibold text-[22.09px] leading-[33.14px]">
            Best quality
          </div>
          <div className="">best quality in low price</div>
        </div>
      </div>

      <div className="flex gap-[31px] items-center">
        <div>
          <ShieldSecurity
            color="#EDA415"
            variant="Bold"
            className="w-[67px] h-[67px]"
          />
        </div>
        <div className="text-navColor">
          <div className="font-semibold text-[22.09px] leading-[33.14px]">
            1 year warranty
          </div>
          <div className="">Avaliable warranty</div>
        </div>
      </div>
    </div>
  );
};
export default QualityFeatures;
