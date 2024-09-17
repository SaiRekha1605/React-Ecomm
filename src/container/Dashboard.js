import React from "react";
import ProductCard from "../components/ProductCard";
import { ProductList } from "../data/ProductList";

export default function Dashboard() {
  return (
    <div className="d-flex justify-content-center flex-wrap p-3">
      {ProductList.map((Product) => <ProductCard {...Product} key={Product.id} />)}
    </div>
  );
}
