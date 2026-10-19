"use client";

import { useEffect, useRef, useState } from "react";
import { formatPrice } from "@/data/products";
import ArrowIcon from "../sections/ArrowIcon";

function getOrderLink(orderLinks) {
  return orderLinks.whatsapp || orderLinks.tiktokShop || orderLinks.shopee;
}

export default function ProductDetailModal({ product, onClose }) {
  const dialogRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const orderLink = getOrderLink(product.orderLinks);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  function handleOrder() {
    if (!orderLink) return;

    if (product.orderLinks.whatsapp) {
      const separator = orderLink.includes("?") ? "&" : "?";
      const message = encodeURIComponent(
        `Halo, saya tertarik dengan ${product.name}. Ukuran ${selectedSize}.`,
      );
      window.open(`${orderLink}${separator}text=${message}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(orderLink, "_blank", "noopener,noreferrer");
  }

  return (
    <dialog
      className="product-dialog"
      ref={dialogRef}
      aria-labelledby="product-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          dialogRef.current?.close();
        }
      }}
    >
      <div className="product-dialog-panel">
        <button
          className="dialog-close"
          type="button"
          aria-label="Tutup detail produk"
          onClick={() => dialogRef.current?.close()}
        >
          <span />
          <span />
        </button>

        <div
          className="dialog-product-image"
          style={{ backgroundImage: `url("${product.image}")` }}
          role="img"
          aria-label={product.name}
        >
          <span className="dialog-image-label">DAY’U ADVENTURE / COLLECTION</span>
        </div>

        <div className="dialog-product-info">
          <p className="eyebrow">{product.category}</p>
          <h2 id="product-dialog-title">{product.name}</h2>
          <p className="dialog-price">{formatPrice(product.price)}</p>
          <p className="dialog-description">{product.description}</p>

          <div className="dialog-divider" />

          <fieldset className="choice-field">
            <legend>
              Pilih warna <span>· {product.colors.indexOf(selectedColor) + 1}</span>
            </legend>
            <div className="dialog-color-options">
              {product.colors.map((color, index) => (
                <button
                  className={selectedColor === color ? "dialog-color selected" : "dialog-color"}
                  key={color}
                  type="button"
                  style={{ "--swatch-color": color }}
                  aria-label={`Pilih warna ${index + 1}`}
                  aria-pressed={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="choice-field size-choice">
            <legend>
              Pilih ukuran <span>· {selectedSize}</span>
            </legend>
            <div className="dialog-size-options">
              {product.sizes.map((size) => (
                <button
                  className={selectedSize === size ? "size-option selected" : "size-option"}
                  key={size}
                  type="button"
                  aria-pressed={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="size-note">
              Pilihan ukuran contoh — pastikan ukuran tersedia sebelum pemesanan.
            </p>
          </fieldset>

          <div className="dialog-actions">
            <button
              className="button button-dark dialog-order-button"
              type="button"
              disabled={!orderLink}
              onClick={handleOrder}
            >
              {orderLink ? "Pesan sekarang" : "Tautan pembelian segera tersedia"}
              {orderLink && <ArrowIcon />}
            </button>
            {!orderLink && (
              <p className="order-note">
                Tambahkan tautan WhatsApp atau marketplace di data produk untuk
                mengaktifkan pemesanan.
              </p>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
