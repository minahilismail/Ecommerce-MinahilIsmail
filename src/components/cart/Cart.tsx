import { CloseCircle } from "iconsax-react";
import { ArrowDown2 } from "iconsax-react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CART_ITEM } from "../../types/types";
import {
  adjustQuantity,
  remove,
  removeAll,
} from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const CartProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state?.cart);

  const removeFromCart = (product: CART_ITEM) => {
    dispatch(remove(product));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(adjustQuantity({ productId, quantity }));
  };
  let subTotal = 0;
  const cartItems = products?.map((product) => {
    subTotal += product?.quantity * product?.price;
    return (
      <div
        key={product?.id}
        className="mt-[29px] pb-[26px] border-b border-border2 px-[15px] flex flex-col lg:flex-row lg:items-center justify-start lg:gap-[200px] gap-[50px]"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-[21px] items-center">
            <img
              className="w-[136px] h-[119px] object-contain"
              src={product?.image}
              alt=""
            />
            <div className="text-nowrap flex flex-col gap-[11px]">
              <div className="font-semibold text-wrap text-ellipsis text-[20.68px] max-h-16 max-w-32 truncate leading-[31.02px] text-navColor">
                {product?.title}
              </div>
              <div>Color: Green</div>
              <div>Size: 30</div>
            </div>
          </div>
          <button
            className="flex lg:hidden"
            onClick={() => removeFromCart(product)}
          >
            <CloseCircle />
          </button>
        </div>
        <div className="flex flex-row justify-between lg:justify-start gap-[25px] lg:gap-[82px]">
          <div className="hidden lg:flex">${product?.price?.toFixed(2)}</div>
          <div className="flex items-center justify-start">
            <button
              onClick={() =>
                handleQuantityChange(
                  product.id,
                  product.quantity - 1 < 0 ? 0 : product.quantity - 1
                )
              }
              className=" flex items-center justify-center h-[35px] w-[32px] border border-borderColor"
            >
              -
            </button>
            <div className=" flex items-center justify-center h-[35px] w-[63px] border border-borderColor">
              {product?.quantity}
            </div>
            <button
              onClick={() =>
                handleQuantityChange(product?.id, product?.quantity + 1)
              }
              className="  flex items-center justify-center h-[35px] w-[32px] border border-borderColor"
            >
              +
            </button>
          </div>
          <div>${(product?.price * product?.quantity).toFixed(2)}</div>
          <button
            className="hidden lg:flex"
            onClick={() => removeFromCart(product)}
          >
            <CloseCircle />
          </button>
        </div>
      </div>
    );
  });

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
        <div>{cartItems}</div>

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
            onClick={() => dispatch(removeAll())}
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
              <div>${subTotal?.toFixed(2)}</div>
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
              <div>${subTotal?.toFixed(2)}</div>
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
