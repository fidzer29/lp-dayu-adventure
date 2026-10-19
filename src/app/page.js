import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CollectionSection from "@/components/sections/CollectionSection";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import BrandSection from "@/components/sections/BrandSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CollectionSection />
        <FeaturedProduct />
        <BrandSection />
      </main>
      <Footer />
    </>
  );
}
