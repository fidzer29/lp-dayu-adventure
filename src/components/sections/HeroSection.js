import Image from "next/image";
import BrandMark from "../layout/BrandMark";
import ArrowIcon from "./ArrowIcon";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-photo" />
      <div className="hero-shade" />
      <Image
        className="hero-models"
        src="/images/hero/banner-jaket.png"
        alt="Model mengenakan koleksi jaket DAY’U Adventure"
        width={640}
        height={361}
        fetchPriority="high"
      />
      <div className="hero-copy">
        <BrandMark light horizontal stacked />
        <h1>
          Gear Up
          <br />
          For Bigger
          <br />
          <span>Journeys</span>
        </h1>
        <p className="hero-description">
          Jaket puffer dan jaket outdoor berkualitas untuk menemani setiap
          langkah petualanganmu.
        </p>
        <a className="button button-sand" href="#collection">
          Explore Collection <ArrowIcon />
        </a>
      </div>
      <div className="hero-caption">
        Dibuat untuk perjalanan yang lebih jauh.
      </div>
    </section>
  );
}
