import HeroComponent from "../components/heroComponent/HeroComponent";
import ScrollableProducts from "../components/scrollProducts/ScrollProducts";
import PopularProducts from "../components/popularProducts/PopularProducts";
import Banner from "../components/banner/Banner";
import OfferProducts from "../components/productsOnOffer/ProductsOnOffer";
import QualityFeatures from "../components/qualityFeatures/QualityFeatures";
import ReviewCarousel from "../components/reviews/Reviews";
import BrandsSponsor from "../components/brandsSponsor/BrandsSponsor";
import NewsComponent from "../components/newsComponent/NewsComponent";
function Home() {
  return (
    <>
      <HeroComponent />
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
export default Home;
