"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "../products/ProductCard";
import ProductDetailModal from "../products/ProductDetailModal";

const categories = ["Puffer Jacket", "Outdoor Jacket"];

export default function CollectionSection() {
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const visibleProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <section className="collection section-wrap" id="collection">
      <div className="section-heading collection-heading">
        <div>
          <p className="eyebrow">Our collection</p>
          <h2>
            Jaket Pilihan
            <br />
            untuk Setiap Petualangan
          </h2>
          <p className="section-intro">
            Dari kesejukan pegunungan hingga kesibukan kota, DAY’U menghadirkan
            jaket pilihan untuk menemani setiap perjalanan.
          </p>
        </div>
        <div className="filter-group" aria-label="Filter kategori produk">
          {categories.map((item) => (
            <button
              className={category === item ? "filter-chip selected" : "filter-chip"}
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(category === item ? "" : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            index={products.indexOf(product)}
            onOpen={setSelectedProduct}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductDetailModal
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
