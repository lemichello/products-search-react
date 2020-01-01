import React, { useCallback, useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ProductTable } from './components/ProductTable';
import { DefaultToaster } from './models/toaster';
import config from '../../config';
import axios from 'axios';

export const FilterableProductTable = function() {
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    (async function fetchProducts() {
      try {
        let resp = await axios.get(`${config.apiUrl}/product`);

        setProducts(resp.data);
        setFilteredProducts(resp.data);
      } catch (e) {
        DefaultToaster.show({
          message: 'Cannot get products',
          intent: 'danger',
          icon: 'error'
        });
      }
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
      (async function addProduct() {
        try {
          let resp = await axios.post(`${config.apiUrl}/product`, product);

          setProducts(products.concat([resp.data]));
          DefaultToaster.show({
            message: `Successfully added ${product.name}`,
            intent: 'success',
            icon: 'saved'
          });
        } catch (e) {
          DefaultToaster.show({
            message: 'Cannot add a new product',
            intent: 'danger',
            icon: 'error'
          });
        }
      })();
    },
    [products]
  );

  let deleteProduct = useCallback(
    product => {
      (async function deleteProduct() {
        try {
          await axios.delete(`${config.apiUrl}/product/${product._id}`);
        } catch (e) {
          DefaultToaster.show({
            message: 'Cannot delete a product',
            intent: 'danger',
            icon: 'error'
          });
          return;
        }

        setProducts(products.filter(x => x._id !== product._id));

        DefaultToaster.show({
          message: `Successfully deleted ${product.name}`,
          intent: 'success',
          icon: 'tick-circle'
        });
      })();
    },
    [products]
  );

  return (
    <div>
      <SearchBar filter={filterProducts} />
      <ProductTable
        products={filteredProducts}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};
