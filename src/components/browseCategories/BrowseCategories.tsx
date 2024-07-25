import { ArrowDown2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navLinks";
const BrowseCategory: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:py-0 items-center justify-center md:justify-normal bg-white top-[174px] gap-[8px] xxl:gap-[98px] md:gap-[50px] md:px-[63px]">
      <Link
        to="/category"
        className="cursor-pointer py-[23px] px-[14px] flex text-nowrap items-center justify-center lg:h-[70px] w-[218px] h-[70px] lg:w-[218px] md:h-[65px] md:w-[200px] gap-[16px] bg-primary md:mt-0 mt-[20px]"
      >
        <div className="text-white md:text-[16px] font-medium">Browse categories</div>
        <div className="text-white">
          <ArrowDown2 />
        </div>
      </Link>

      <div className="flex flex-col md:flex-row items-center gap-[15px] xxl:gap-[327px] xl:gap-[170px]">
        <div className="hidden lg:flex items-center gap-[29px] text-navText">
          {NAV_LINKS.map((link, index) => (
            <div key={index} className="flex items-center gap-[16px]">
              <div className="cursor-pointer text-nowrap">{link.name}</div>
              {link.hasDropdown && (
                <div>
                  <ArrowDown2 className="cursor-pointer" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-navColor text-nowrap font-bold">
          30 Days Free Return
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
