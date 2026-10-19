import { formatPrice } from "@/data/products";
import ArrowIcon from "../sections/ArrowIcon";

export default function ProductCard({ product, index, onOpen }) {
  return (
    <article className="product-card">
      <button
        className="product-image"
        type="button"
        aria-label={`Lihat detail ${product.name}`}
        onClick={() => onOpen(product)}
      >
        <div
          className="product-photo"
          style={{ backgroundImage: `url("${product.image}")` }}
          role="img"
          aria-label={product.name}
        />
        <span className="product-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </button>
      <div className="product-info">
        <div className="product-title-line">
          <h3>{product.name}</h3>
          <span className="product-category">
            {product.category === "Puffer Jacket" ? "PUFFER" : "SHELL"}
          </span>
        </div>
        <p className="product-price">{formatPrice(product.price)}</p>
        <div className="swatches" aria-label={`Pilihan warna ${product.name}`}>
          {product.colors.map((color) => (
            <span
              className="swatch"
              key={color}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <button
          className="button button-dark product-button"
          type="button"
          onClick={() => onOpen(product)}
        >
          View Product <ArrowIcon />
        </button>
      </div>
    </article>
  );
}
