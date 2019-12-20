import React, { useCallback, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { ProductTable } from "./components/ProductTable";

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
    id: "1"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
    id: "2"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
    id: "3"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
    id: "4"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
    id: "5"
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
    id: "6"
  }
];

export const FilterableProductTable = function() {
  let [filteredProducts, setFilteredProducts] = useState(products);
  let filterProducts = useCallback(
    e =>
      setFilteredProducts(
        products.filter(
          x =>
            x.name.toLowerCase().includes(e.name.toLowerCase()) &&
            (e.stocked ? x.stocked : true)
        )
      ),
    []
  );

  return (
    <div>
      <SearchBar filter={filterProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};
