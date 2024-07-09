import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ProductCard from "../../components/productCard/productCard";
import { useAppSelector } from "../../hooks/hooks";

function WishlistPage() {
  const products=useAppSelector((state)=>state.wishlist)
  if(!products) return <Loader/>
  if(products.length==0) return (
    <div className="mt-20 flex items-center justify-center w-[300px] ">
      <Link
  to={"/"}
  className=" flex items-center justify-center text-nowrap rounded-[32.42px] bg-primary text-white text-[20.7px] leading-[31.05px] px-[37px] py-[19.5px]"
>
  Continue Shopping
</Link>
    </div>
  
  );
  return (
    <>
      <div className="mx-[64.4px] mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10
       justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
export default WishlistPage;
