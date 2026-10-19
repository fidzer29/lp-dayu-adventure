import ArrowIcon from "./ArrowIcon";
import BenefitIcon from "./BenefitIcon";

export default function FeaturedProduct() {
  return (
    <section className="featured section-wrap" id="featured">
      <a
        className="featured-photo"
        href="#collection"
        aria-label="Lihat koleksi jaket DAY’U"
      >
        <div className="featured-photo-image" />
        <span className="photo-label">
          Puffer Jacket Series <ArrowIcon />
        </span>
      </a>
      <div className="featured-copy">
        <p className="eyebrow">Featured product</p>
        <h2>Puffer Jacket</h2>
        <h3>Kenyamanan Maksimal, Perlindungan Total</h3>
        <p className="featured-description">
          Jaket puffer DAY’U dirancang untuk memberikan kehangatan optimal
          dengan bahan berkualitas tinggi, ringan, dan tahan angin. Cocok untuk
          aktivitas outdoor maupun penggunaan sehari-hari.
        </p>
        <div className="benefits">
          <div>
            <BenefitIcon type="weather" />
            <span>
              Hangat
              <br />
              &amp; Nyaman
            </span>
          </div>
          <div>
            <BenefitIcon type="wind" />
            <span>
              Tahan
              <br />
              Angin
            </span>
          </div>
          <div>
            <BenefitIcon type="leaf" />
            <span>
              Ringan &amp;
              <br />
              Fleksibel
            </span>
          </div>
          <div>
            <BenefitIcon type="mountain" />
            <span>
              Cocok untuk
              <br />
              Aktivitas Outdoor
            </span>
          </div>
        </div>
        <a className="button button-dark" href="#contact">
          View Product <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
