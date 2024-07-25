import { CloseCircle } from "iconsax-react";
import useSingleCartItem from "./useSingleCartItem";

const SingleCartItem: React.FC = () => {
  const { products, removeFromCart, handleQuantityChange } =
    useSingleCartItem();

  return (
    <div>
      {products?.map((product) => (
        <div
          key={product?.id}
          className="mt-[25px] pb-[26px] border-b border-border2 flex flex-col lg:flex-row lg:items-center justify-start lg:gap-[200px] xl:gap-[73px] gap-[50px]"
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
          <div className="flex flex-row justify-between lg:justify-start gap-[25px] lg:gap-[82px] xl:gap-[73px]">
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
      ))}
    </div>
  );
};

export default SingleCartItem;
