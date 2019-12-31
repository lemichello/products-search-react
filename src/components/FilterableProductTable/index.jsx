import React, { useCallback, useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ProductTable } from './components/ProductTable';
import { DefaultToaster } from './utils/toaster';
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

  let addProduct = useCallback(
    product => {
      (async function() {
        let resp = await axios.post(`${config.apiUrl}/product`, product);

        setProducts(products.concat([resp.data]));
        DefaultToaster.show({
          message: `Successfully added ${product.name}`,
          intent: 'success',
          icon: 'saved'
        });
      })();
    },
    [products]
  );

  return (
    <div>
      <SearchBar filter={filterProducts} />
      <ProductTable products={filteredProducts} addProduct={addProduct} />
    </div>
  );
};
