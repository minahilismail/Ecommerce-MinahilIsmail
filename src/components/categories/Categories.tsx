import React from "react";
import useFetchCategories from "../../hooks/useFetchCategories";
import useCategories from "./useCategories";
import useFetchMultiFilteredProducts from "../../hooks/useFetchMultiFilteredProducts";
import CheckboxFilter from "../checkboxFilter/CheckboxFilter";
import ProductCard from "../productCard/productCard";
import useGetProducts from "../../hooks/useGetProducts";
import Loader from "../loader/Loader";

const Categories: React.FC = () => {
  const { isLoading, isError } = useGetProducts();
  const [categories] = useFetchCategories("/products/categories");
  const [productCounts] = useCategories();
  const [
    selectedFilters,
    setSelectedFilters,
    filteredProducts,
    handleFilterButtonClick,
    resetFilters,
  ] = useFetchMultiFilteredProducts("/products");
  if (isLoading || isError) return <Loader />;
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[20px] mr-[64.4px] ml-[61px] mt-[103px] mb-[58.01px]">
      <div className="lg:basis-1/4 md:basis-1/5 space-y-[12px] mb-[13px]">
        <div className="flex items-center justify-between">
          <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
            Categories
          </div>
          <div
            onClick={resetFilters}
            className="cursor-pointer text-catFilterClr text-[15.09px] font-normal leading-[22.64px]"
          >
            Reset
          </div>
        </div>
        <CheckboxFilter
          id="allCat"
          label="All Categories"
          isChecked={selectedFilters.length === 0}
          count={categories.length}
          onClick={() => setSelectedFilters([])}
        />
        {categories.map((category, index) => (
          <CheckboxFilter
            key={index}
            id={`cat-${index}`}
            label={category}
            isChecked={selectedFilters.includes(category)}
            count={productCounts[category]}
            onClick={() => handleFilterButtonClick(category)}
          />
        ))}
        <hr className="mb-[13px] mt-[26px] h-[2px] bg-borderColor" />

        <div className="hidden lg:flex flex-col gap-[12px]">
          <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
            Availability
          </div>
          <div className="flex justify-between ">
            <div>0 selected</div>
            <div className="cursor-pointer text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
              Reset
            </div>
          </div>
          <CheckboxFilter
            id="inStock"
            label="In stock"
            isChecked={false}
            count={5}
            onClick={() => {}}
          />
          <CheckboxFilter
            id="outOfStock"
            label="Out of stock"
            isChecked={false}
            count={0}
            onClick={() => {}}
          />
        </div>
        <hr className="hidden lg:flex mb-[13px] mt-[26px] h-[2px] bg-borderColor" />

        <div className="hidden lg:flex flex-col gap-[12px]">
          <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
            Product type
          </div>
          <div className="flex justify-between ">
            <div>0 selected</div>
            <div className="cursor-pointer text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
              Reset
            </div>
          </div>
          <CheckboxFilter
            id="smartWatch"
            label="Smart-watch"
            isChecked={false}
            count={5}
            onClick={() => {}}
          />
        </div>
        <hr className="hidden lg:flex mb-[13px] mt-[26px] h-[2px] bg-borderColor" />
        <div className="hidden lg:flex flex-col gap-[12px]">
          <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
            Brand
          </div>
          <div className="flex justify-between ">
            <div>0 selected</div>
            <div className="cursor-pointer text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
              Reset
            </div>
          </div>
          <CheckboxFilter
            id="smartWatch"
            label="Smart-watch"
            isChecked={false}
            count={5}
            onClick={() => {}}
          />
        </div>
        <hr className="hidden lg:flex mb-[13px] mt-[26px] h-[2px] bg-borderColor" />

        <div className="hidden lg:flex flex-col gap-[12px]">
          <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
            Color
          </div>
          <div className="flex justify-between ">
            <div>0 selected</div>
            <div className="cursor-pointer text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
              Reset
            </div>
          </div>
          <div className="flex gap-[22px]">
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-primary"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-red-600"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-green-700"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-pink-800"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-blue-600"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-purple-700"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-yellow-500"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-black"></div>
            <div className="w-[15px] h-[16px] rounded-full cursor-pointer bg-gray-500"></div>
          </div>
        </div>
        <hr className="hidden lg:flex mb-[13px] mt-[26px] h-[2px] bg-borderColor" />

        <div className="hidden lg:flex flex-col gap-[12px]">
          <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
            Size
          </div>
          <div className="flex justify-between ">
            <div>0 selected</div>
            <div className="cursor-pointer text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
              Reset
            </div>
          </div>
          <CheckboxFilter
            id="smartWatch"
            label="M"
            isChecked={false}
            count={5}
            onClick={() => {}}
          />
          <CheckboxFilter
            id="smartWatch"
            label="S"
            isChecked={false}
            count={5}
            onClick={() => {}}
          />
          <CheckboxFilter
            id="smartWatch"
            label="X"
            isChecked={false}
            count={5}
            onClick={() => {}}
          />
          <CheckboxFilter
            id="smartWatch"
            label="XX"
            isChecked={false}
            count={5}
            onClick={() => {}}
          />
        </div>
        <hr className="hidden lg:flex mb-[13px] mt-[26px] h-[2px] bg-borderColor" />
      </div>
      <div className="lg:basis-3/4 md:basis-4/5 ">
      <div className="grid grid-cols-3 gap-[26.56px] xl:justify-start md:justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Categories;
