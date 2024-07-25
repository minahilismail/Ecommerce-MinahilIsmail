import ProductCard from "../productCard/productCard";
import useRelatedProducts from "./useRelatedProducts";

interface RelatedProductsProps {
    category: string;
  }
const RelatedProducts: React.FC<RelatedProductsProps> = ({ category }) => {
    const [products] = useRelatedProducts(category);
return (
    <div>
    <h1 className="text-secondary text-[27.38px] font-semibold mb-[53px]">
        Related product
      </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 xxl:gap-[30.49px] gap-[40px] ">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
);
};
export default RelatedProducts;