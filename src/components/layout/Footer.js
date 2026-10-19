import BrandMark from "./BrandMark";
import ArrowIcon from "../sections/ArrowIcon";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main section-wrap">
        <div className="footer-brand">
          <BrandMark light />
          <p>
            Explore <span>·</span> Wear <span>·</span> Beyond
          </p>
        </div>
        <div className="footer-column">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#contact" aria-label="TikTok">
              ♪
            </a>
            <a href="#contact" aria-label="Instagram">
              ◎
            </a>
            <a href="#contact" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Shop Platform</h2>
          <p className="platform-note">
            Temukan koleksi DAY’U di marketplace pilihanmu.
          </p>
          <a className="contact-link" href="#collection">
            Lihat koleksi <ArrowIcon />
          </a>
        </div>
        <div className="footer-column">
          <h2>Contact Us</h2>
          <p className="platform-note">Tertarik dengan produk kami?</p>
          <a className="contact-link" href="mailto:hello@dayu-adventure.com">
            Email DAY’U <ArrowIcon />
          </a>
          <p className="location">Indonesia</p>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <p>© 2025 DAY’U ADVENTURE. All rights reserved.</p>
        <p>
          Explore <span>·</span> Wear <span>·</span> Beyond
        </p>
      </div>
    </footer>
  );
}
