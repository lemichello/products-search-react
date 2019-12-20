import React from "react";
import "./style.css";

export const ProductRow = function(props) {
  const { name, price, stocked } = props.product;

  return (
    <tr>
      <td className={stocked ? "" : "red-color"}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};
