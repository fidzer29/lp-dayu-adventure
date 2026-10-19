import BrandMark from "../layout/BrandMark";
import BenefitIcon from "./BenefitIcon";

export default function BrandSection() {
  return (
    <section className="about section-wrap" id="about">
      <div className="about-copy">
        <p className="eyebrow">About DAY’U Adventure</p>
        <h2>
          Outdoor Fashion
          <br />
          for a Better You
        </h2>
        <p className="about-description">
          DAY’U ADVENTURE adalah brand fashion outdoor yang menghadirkan jaket
          puffer dan jaket outdoor dengan fokus pada kenyamanan, fungsi, dan
          style. Kami percaya bahwa setiap perjalanan, sekecil apa pun, layak
          untuk dinikmati dengan perlengkapan terbaik.
        </p>
        <div className="values">
          <div>
            <BenefitIcon type="mountain" />
            <span>
              Comfort
              <br />
              in Every Step
            </span>
          </div>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>
              Function
              <br />
              in Every Condition
            </span>
          </div>
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
            </svg>
            <span>
              Style
              <br />
              for Every Journey
            </span>
          </div>
        </div>
      </div>
      <div className="about-photo">
        <div className="about-photo-overlay">
          <BrandMark light />
          <p>
            More Than Just a Jacket
            <br />
            It’s Your Adventure Partner
          </p>
        </div>
      </div>
    </section>
  );
}
