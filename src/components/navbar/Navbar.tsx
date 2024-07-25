import { Link } from "react-router-dom";
import { ShoppingCart } from "iconsax-react";
import { User } from "iconsax-react";
import { Heart } from "iconsax-react";
import { Location } from "iconsax-react";
import { Truck } from "iconsax-react";
import logo from "../../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import useNavbar from "./useNavbar";

const Navbar: React.FC = () => {
  const {cartItems,wishlistItems,dropdownVisible,setDropdownVisible}=useNavbar();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bg-white w-full">
      <div className="text-center text-[14px] md:pt-[21px] md:pb-[29px] md:pl-[61px] md:pr-[49px] md:flex items-center md:justify-between justify-center px-[36px] py-[16px]">
        <div className="pb-[8px] text-nowrap md:p-0">
          Need help? Call us: <span className="cursor-pointer">(+98) 0234 456 789</span>
        </div>
        <div className="flex items-center cursor-pointer justify-center gap-[36px]">
          <div className="flex text-nowrap items-center gap-[20px]">
            <div>
              <Location />
            </div>
            <div>Our Store</div>
          </div>

          <div className="flex text-nowrap items-center gap-[20px]">
            <div>
              <Truck />
            </div>
            <div className="">Track your order</div>
          </div>
        </div>
      </div>
      <div className="bg-navColor w-full top-[74px] sticky lg:px-[31px] xxl:px-[67.79px] md:py-[21px] px-[20.79px] py-[16px]">
        <div className="flex justify-between items-center gap-[24px]">
          <div className="flex lg:gap-[85px] items-center">
            <Link to={"/"} className="flex items-center justify-center md:w-[140px] w-[145px] h-[38px] md:h-[39px]">
              <img
                className="md:w-[140px] w-[100.5px] h-[28px] md:h-[39px] cursor-pointer object-contain"
                src={logo}
                alt="logo"
              />
            </Link>
            <div className="hidden lg:flex container items-center justify-between bg-white xxl:w-[438px] xxl:h-[56px] lg:w-[350px] lg:h-[56px] py-[17.5px] pr-0 pl-[25px] gap-[10px] rounded-[20px]">
              <div>Search anything</div>
              <div className="container cursor-pointer py-[17.5px] px-[41px] bg-primary xxl:w-[132px] xxl:h-[56px] lg:w-[110px] lg:h-[56px] rounded-[20px] text-white flex items-center justify-center">
                Search
              </div>
            </div>
          </div>

          <div className="xxs:hidden flex items-center gap-[29px]">
            <div className="flex items-center cursor-pointer gap-[12px]">
              <div className="rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-200">
                <User />
              </div>
              <div className="text-white hidden md:flex">Sign in</div>
            </div>
            <Link to="/wishlist" className="flex cursor-pointer items-center gap-[12px]">
              <div className="flex items-center">
                <div className="rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer  transition-all duration-200">
                  <Heart />
                </div>
                <div className="bg-primary rounded-[394.74px] w-[14.21px] h-[15px] text-white text-[9.47px] flex items-center justify-center">
                  {wishlistItems}
                </div>
              </div>
              <div className="text-white hidden md:flex">Wishlist</div>
            </Link>
            <Link to="/cart" className="flex items-center gap-[12px]">
              <div className="flex items-center">
                <div className="rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-200">
                  <ShoppingCart />
                </div>
                <div className="bg-primary rounded-[394.74px] w-[14.21px] h-[15px] text-white text-[9.47px] flex items-center justify-center">
                  {cartItems}
                </div>
              </div>
              <div className="text-white hidden md:flex">Cart</div>
            </Link>
          </div>
          <RxHamburgerMenu className="hidden xxs:flex text-white" onClick={toggleDropdown} />

          {dropdownVisible && (
            <div className="absolute top-[74px] right-0 bg-navColor w-full flex flex-col z-10">
              <Link to="/wishlist" className="flex items-center gap-[12px] py-2">
                <div className="rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer">
                  <Heart />
                </div>
                <div className="bg-primary rounded-[394.74px] w-[14.21px] h-[15px] text-white text-[9.47px] flex items-center justify-center">
                  {wishlistItems}
                </div>
                <div className="text-white">Wishlist</div>
              </Link>
              <Link to="/cart" className="flex items-center gap-[12px] py-2">
                <div className="rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer">
                  <ShoppingCart />
                </div>
                <div className="bg-primary rounded-[394.74px] w-[14.21px] h-[15px] text-white text-[9.47px] flex items-center justify-center">
                  {cartItems}
                </div>
                <div className="text-white">Cart</div>
              </Link>
              <div className="flex items-center gap-[12px] py-2 cursor-pointer">
                <div className="rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer">
                  <User />
                </div>
                <div className="text-white">Sign in</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
