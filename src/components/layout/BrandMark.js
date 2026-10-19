import Image from "next/image";

export default function BrandMark({
  light = false,
  horizontal = false,
  stacked = false,
}) {
  return (
    <a
      className={`brand-mark${light ? " brand-mark-light" : ""}${
        horizontal ? " brand-mark-combo" : ""
      }${stacked ? " brand-mark-stacked" : ""}`}
      href="#home"
      aria-label="DAY’U Adventure - Beranda"
    >
      {horizontal ? (
        <>
          <span className="brand-icon-window" aria-hidden="true">
            <Image
              className="brand-icon-image"
              src="/images/brand/logo-day'u.png"
              alt=""
              width={512}
              height={512}
            />
          </span>
          <Image
            className="brand-wordmark"
            src="/images/brand/tulisan-dayu.png"
            alt=""
            width={512}
            height={512}
          />
        </>
      ) : (
        <Image
          className="brand-logo"
          src="/images/brand/logo-day'u.png"
          alt="DAY’U Adventure"
          width={512}
          height={512}
        />
      )}
    </a>
  );
}
