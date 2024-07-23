import React from "react";
import brand8 from "../../assets/images/brands/brand-8.png";
import brand4 from "../../assets/images/brands/brand-4.png";
import brand5 from "../../assets/images/brands/brand-5.png";
import brand6 from "../../assets/images/brands/brand-6.png";
import brand7 from "../../assets/images/brands/brand-7.png";

const BrandsSponsor: React.FC = () => {
  const brands = [brand8, brand4, brand5, brand6, brand7];

  return (
    <div className="py-[47.38px] px-[32.5px] bg-quality md:rounded-[20px] flex md:flex-row flex-col gap-[55.3px] items-center justify-center mb-[24px] md:mb-[101px] lg:ml-[60px] lg:mr-[63px] md:mx-[30px] md:mt-[54px]">
      {brands.map((brand, index) => (
        <div key={index}>
          <img
            className="w-[206.16px] h-[41.23px] md:w-[300px] md:h-[45px]"
            src={brand}
            alt={`Brand ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandsSponsor;
