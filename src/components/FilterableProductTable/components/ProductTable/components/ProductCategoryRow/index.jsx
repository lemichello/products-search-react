import React from "react";
import "./style.css";

export const ProductCategoryRow = function(props) {
  return (
    <tr>
      <th className={"category"} colSpan={"100%"}>
        {props.name}
      </th>
    </tr>
  );
};
