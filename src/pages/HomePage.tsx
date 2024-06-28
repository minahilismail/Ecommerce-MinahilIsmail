import Home from "../components/home/Home";
import ScrollableProducts from "../components/products/ScrollProducts";
import PopularProducts from "../components/products/PopularProducts";
import Banner from "../components/banner/Banner";
import OfferProducts from "../components/products/ProductsOnOffer";
import QualityFeatures from "../components/qualityFeatures/QualityFeatures";
import ReviewCarousel from "../components/reviews/Reviews";
import BrandsSponsor from "../components/brandsSponsor/BrandsSponsor";
import NewsComponent from "../components/newsComponent/NewsComponent";
function HomePage() {
  return (
    <>
      <Home />
      <ScrollableProducts />
      <PopularProducts />
      <Banner />
      <OfferProducts />
      <QualityFeatures />
      <ReviewCarousel />
      <BrandsSponsor />
      <NewsComponent />
    </>
  );
}
export default HomePage;
