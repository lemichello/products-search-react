import React, { useCallback, useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ProductTable } from './components/ProductTable';
import config from '../../config';
import axios from 'axios';

export const FilterableProductTable = function() {
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      let resp = await axios.get(`${config.apiUrl}/product`);

      setProducts(resp.data);
      setFilteredProducts(resp.data);
    })();
  }, []);

  let filterProducts = useCallback(
    e => {
      setFilteredProducts(
        products.filter(
          x =>
            x.name.toLowerCase().includes(e.name.toLowerCase()) &&
            (e.stocked ? x.stocked : true)
        )
      );
    },
    [products]
  );

  return (
    <div>
      <SearchBar filter={filterProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};
