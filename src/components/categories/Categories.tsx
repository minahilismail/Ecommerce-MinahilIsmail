import Star from "../star/Star";
import { Heart } from "iconsax-react";
import { Link } from "react-router-dom";
import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchCategorywiseProductsCount from "../../hooks/useFetchCategorywiseProductsCount";
import useFetchMultiFilteredProducts from "../../hooks/useFetchMultiFilteredProducts";

const CategorySidebar: React.FC = () => {
  const [categories] = useFetchCategories(
    "https://fakestoreapi.com/products/categories"
  );
  const [productCounts] = useFetchCategorywiseProductsCount();
  const [
    selectedFilters,
    setSelectedFilters,
    filteredProducts,
    handleFilterButtonClick,
    resetFilters,
  ] = useFetchMultiFilteredProducts("https://fakestoreapi.com/products");

  const category = categories.map((category, index) => (
    <div key={index} className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <input
          onClick={() => handleFilterButtonClick(category)}
          id={`cat-${index}`}
          className="text-favorite w-[25px] h-[25px] rounded-[8px] bg-favorite"
          type="checkbox"
          checked={selectedFilters.includes(category)}
          readOnly
        />
        <label
          className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]"
          htmlFor={`cat-${index}`}
        >
          {category}
        </label>
      </div>
      <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
        {productCounts[category]}
      </div>
    </div>
  ));

  const catProCards = filteredProducts.map((product) => (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="relative rounded-2xl p-6 border border-borderClr2 overflow-hidden shadow-lg mx-auto"
      style={{ width: "300px", height: "305px" }}
    >
      <div className="space-y-4 sm:space-y-[43.35px]">
        <div className="flex items-center justify-center">
          <img
            className="object-contain"
            src={product.image}
            style={{ width: "154px", height: "94px" }}
            alt="Card Image"
          />
        </div>

        <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary max-w-[188px]">
          <div className="font-semibold truncate">{product.title}</div>
          <div className="font-semibold text-textClr1 text-[17.09px]">
            ${product.price}
          </div>
          <div className="font-semibold text-border1">
            <Star stars={product.rating.rate} />
          </div>
        </div>
      </div>
      <div className="absolute top-[30px] right-[20px] w-[27.54px] h-[27.54px] rounded-[122.4px] bg-favorite flex items-center justify-center">
        <Heart className="h-[14.45px] w-[14.45px]" />
      </div>
    </Link>
  ));

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-[20px] mx-10 mt-[20px] mb-[58.01px]">
        <div className="basis-1/5 space-y-[12px] mb-[13px] ">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <input
                checked={selectedFilters.length === 0}
                onClick={() => setSelectedFilters([])}
                id="allCat"
                className="text-favorite w-[25px] h-[25px] rounded-[8px] bg-favorite"
                type="checkbox"
                readOnly
              />
              <label
                htmlFor="allCat"
                className="text-nowrap text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]"
              >
                All Categories
              </label>
            </div>
            <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
              {categories.length}
            </div>
          </div>

          {category}
          <hr className="mb-[13px] mt-[26px] h-[2px] bg-borderColor" />

          <div className="hidden lg:flex flex-col gap-[12px]">
            <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
              Availability
            </div>
            <div className="flex items-center justify-between">
              <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
                0 selected
              </div>
              <div className="text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
                Reset
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="inStock"
                  className="text-favorite w-[25px] h-[25px] rounded-[8px] bg-favorite"
                  type="checkbox"
                  color="grey"
                />
                <label
                  htmlFor="inStock"
                  className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]"
                >
                  In stock
                </label>
              </div>
              <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
                5
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="outOfStock"
                  className="text-favorite w-[25px] h-[25px] rounded-[8px] bg-favorite"
                  type="checkbox"
                  color="grey"
                />
                <label
                  htmlFor="outOfStock"
                  className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]"
                >
                  Out of stock
                </label>
              </div>
              <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
                0
              </div>
            </div>
          </div>
          <hr className="hidden lg:flex mb-[13px] mt-[26px] h-[2px] bg-borderColor" />

          <div className="hidden lg:flex flex-col gap-[12px]">
            <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
              Product type
            </div>
            <div className="flex items-center justify-between">
              <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
                0 selected
              </div>
              <div className="text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
                Reset
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="smartWatch"
                  className="text-favorite w-[25px] h-[25px] rounded-[8px] bg-favorite"
                  type="checkbox"
                  color="grey"
                />
                <label
                  htmlFor="smartWatch"
                  className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]"
                >
                  Smart-watch
                </label>
              </div>
              <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
                5
              </div>
            </div>
          </div>
          <hr className="hidden lg:flex mb-[13px] mt-[26px] h-[2px] bg-borderColor" />

          <div className="hidden lg:flex flex-col gap-[12px]">
            <div className="text-navColor text-[16.09px] font-medium leading-[24.14px]">
              Price
            </div>
            <div className="flex items-center justify-between">
              <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
                0 selected
              </div>
              <div className="text-catFilterClr text-[15.09px] font-normal leading-[22.64px]">
                Reset
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="under10"
                  className="text-favorite w-[25px] h-[25px] rounded-[8px] bg-favorite"
                  type="checkbox"
                  color="grey"
                />
                <label
                  htmlFor="under10"
                  className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]"
                >
                  Under $10
                </label>
              </div>
              <div className="text-categoryTextColor text-[16.09px] font-normal leading-[24.14px]">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="basis-4/5 flex flex-wrap gap-[20px] justify-center">
          {catProCards}
        </div>
      </div>
    </>
  );
};

export default CategorySidebar;
