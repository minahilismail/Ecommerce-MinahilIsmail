import brand8 from "../../assets/brands/brand-8.png";
import brand4 from "../../assets/brands/brand-4.png";
import brand5 from "../../assets/brands/brand-5.png";
import brand6 from "../../assets/brands/brand-6.png";
import brand7 from "../../assets/brands/brand-7.png";
const BrandsSponsor: React.FC = () => {
  return (
    <div className="py-[46.92px] bg-quality md:rounded-[20px] flex md:flex-row flex-col gap-[55.3px] items-center justify-center mb-[24px] md:mb-[101px] lg:mx-[60px] md:mx-[30px] md:mt-[54px]">
      <div>
        <img
          className="w-[206.16px] h-[41.23px] md:w-[300px] md:h-[45px]"
          src={brand8}
          alt=""
        />
      </div>

      <div className="">
        <img
          className="w-[206.16px] h-[41.23px] md:w-[300px] md:h-[45px]"
          src={brand4}
          alt=""
        />
      </div>

      <div className="">
        <img
          className="w-[206.16px] h-[41.23px] md:w-[300px] md:h-[45px]"
          src={brand5}
          alt=""
        />
      </div>

      <div className="">
        <img
          className="w-[206.16px] h-[41.23px] md:w-[300px] md:h-[45px]"
          src={brand6}
          alt=""
        />
      </div>

      <div className="">
        <img
          className="w-[206.16px] h-[41.23px] md:w-[300px] md:h-[45px]"
          src={brand7}
          alt=""
        />
      </div>
    </div>
  );
};
export default BrandsSponsor;
