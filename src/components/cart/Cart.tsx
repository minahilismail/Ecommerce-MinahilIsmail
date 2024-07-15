import { ArrowDown2 } from "iconsax-react";
import { Link } from "react-router-dom";
import SingleCartItem from "../singleCartItem/SingleCartItem";
import useSingleCartItem from "../singleCartItem/useSingleCartItem";
import useCart from "./useCart";

const CartProductDetails: React.FC = () => {
  const { subTotal } = useSingleCartItem();
  const { handleRemoveAll } = useCart();

  return (
    <div className="flex flex-col lg:flex-row gap-[20px] lg:mx-[61px] mx-6 mb-[96px] mt-[31px]">
      <div className="basis-3/5 ">
        <div className=" hidden lg:flex bg-quality px-[50px] py-[10px] items-center gap-[227px]">
          <div className="font-medium text-[20.68px] leading-[31.02px]">
            Product
          </div>
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[82px] font-medium text-[20.68px] leading-[31.02px]">
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
        </div>
        <SingleCartItem />

        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between mt-[31px]">
          <Link
            to={"/"}
            className="text-nowrap rounded-[32.42px] w-full bg-primary text-white text-[20.7px] leading-[31.05px] flex items-center justify-center px-[37px] py-[19.5px]"
          >
            Continue Shopping
          </Link>
          <button className="rounded-[32.42px] w-full border border-updateCart text-updateCartText font-semibold text-[20.7px] leading-[31.05px] flex items-center justify-center px-[37px] py-[19.5px]">
            Update Cart
          </button>
          <button
            onClick={handleRemoveAll}
            className="rounded-[32.42px] w-full border border-clear text-clear font-semibold text-[20.7px] leading-[31.05px] flex items-center justify-center px-[37px] py-[19.5px]"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="basis-2/5 border border-border2">
        <div className=" bg-quality py-[10px] flex flex-col items-center justify-center">
          <div className="font-medium text-[20.68px] leading-[31.02px]">
            Cart Total
          </div>
        </div>
        <div className="px-[43.5px] py-[23px] flex flex-col gap-[29px]">
          <div className="flex flex-col gap-[33px]">
            <div className="flex items-center justify-between border-b border-borderGrey font-medium text-[19.68px] leading-[29.52px] pb-[20px]">
              <div>Subtotal</div>
              <div>${subTotal.toFixed(2)}</div>
            </div>

            <div className="pb-[33px] border-b border-borderGrey">
              <div className="rounded-[20px] overflow-hidden border border-lightBorder flex items-center justify-between p-[20px]">
                <div>Enter coupon code</div>
                <button>Apply</button>
              </div>
            </div>

            <div className="rounded-[20px] overflow-hidden border border-lightBorder flex items-center justify-between p-[20px]">
              <div>Country</div>
              <button>
                <ArrowDown2 />
              </button>
            </div>
            <div className="flex items-center justify-between font-normal text-[16.68px] leading-[25.02px]">
              <div>Total amount</div>
              <div>${subTotal.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="rounded-[32.42px] bg-primary text-white text-[20.7px] leading-[31.05px] flex items-center justify-center px-[62px] py-[10.5px]">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartProductDetails;