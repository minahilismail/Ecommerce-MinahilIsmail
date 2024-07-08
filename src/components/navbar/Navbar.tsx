import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "iconsax-react";
import { User } from "iconsax-react";
import { Heart } from "iconsax-react";
import { Location } from "iconsax-react";
import { Truck } from "iconsax-react";
import { useAppSelector } from "../../hooks/hooks";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.length);
  return (
    <div className="bg-white w-full">
      <div className="text-center md:pt-[21px] md:pb-[29px] md:px-[55px] md:flex items-center md:justify-between justify-center">
        <div className="px-2 py-3">Need help? Call us: (+98) 0234 456 789</div>
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="flex items-center gap-4">
            <div>
              <Location />
            </div>
            <div>Our Store</div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <Truck />
            </div>
            <div className="">Track your order</div>
          </div>
        </div>
      </div>
      <div className="bg-navColor w-full top-[74px] sticky">
        <div className="px-14 py-6">
          <div className="flex justify-between items-center gap-[24px]">
            <div className="flex gap-[85px] items-center">
              <Link to={"/"}>
                <img
                  className="md:w-[140px] w-[145px] h-[38px] md:h-[39px] cursor-pointer object-contain"
                  src={logo}
                  alt="logo"
                />
              </Link>
              <div className="hidden lg:flex container items-center justify-between bg-white w-[438px] h-[56px] py-0 pr-0 pl-[25px] gap-10 rounded-[20px]">
                <div>Search anything</div>
                <div className="container cursor-pointer bg-primary w-[132px] h-[56px] rounded-[20px] text-white flex items-center justify-center">
                  Search
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-[29px]">
                <div className="flex items-center cursor-pointer gap-[12px]">
                  <div className=" rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer  transition-all duration-200">
                    <User />
                  </div>
                  <div className="text-white hidden md:flex">Sign in</div>
                </div>
                <div className="flex cursor-pointer items-center gap-[12px]">
                  <div className="flex items-center">
                    <div className=" rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer  transition-all duration-200">
                      <Heart />
                    </div>
                    <div className="bg-primary rounded-[394.74px] w-[14.21px] h-[15px] text-white text-[9.47px] flex items-center justify-center">
                      0
                    </div>
                  </div>
                  <div className="text-white hidden md:flex">Wishlist</div>
                </div>
                <Link to="/cart" className="flex items-center gap-[12px]">
                  <div className="flex items-center">
                    <div className=" rounded-full text-white text-3xl w-8 h-8 flex items-center justify-center cursor-pointer transition-all duration-200">
                      <ShoppingCart />
                    </div>
                    <div className="bg-primary rounded-[394.74px] w-[14.21px] h-[15px] text-white text-[9.47px] flex items-center justify-center">
                      {cartItems}
                    </div>
                  </div>
                  <div className="text-white hidden md:flex">Cart</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
