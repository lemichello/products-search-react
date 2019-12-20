import React from "react";
import groupBy from "lodash/groupBy";
import "./style.css";
import { ProductCategoryRow } from "./components/ProductCategoryRow";
import { ProductRow } from "./components/ProductRow";

export const ProductTable = function({ products }) {
  products = groupBy(products, x => x.category);

  return (
    <table>
      <thead>
        <tr>
          <th className={"text-align-start"}>Name</th>
          <th className={"text-align-start"}>Price</th>
        </tr>
      </thead>
      {Object.keys(products).map(category => (
        <tbody key={category}>
          <ProductCategoryRow name={category} key={category} />
          {products[category].map(product => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      ))}
    </table>
  );
};
