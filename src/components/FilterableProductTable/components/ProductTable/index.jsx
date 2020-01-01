import React, { useState, useCallback } from 'react';
import groupBy from 'lodash/groupBy';
import './style.css';
import { ProductCategoryRow } from './components/ProductCategoryRow';
import { ProductRow } from './components/ProductRow';
import { Button, Tooltip, Position } from '@blueprintjs/core';
import { NewProductDialog } from './components/NewProductDialog';

export const ProductTable = function({ products, addProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  products = groupBy(products, x => x.category);

  const openDialog = () => {
    setIsOpen(true);
  };

  let closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  let confirmDialog = useCallback(e => addProduct(e), [addProduct]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className={'text-align-start'}>Name</th>
            <th className={'text-align-start'}>Price</th>
          </tr>
        </thead>
        {Object.keys(products).map(category => (
          <tbody key={category}>
            <ProductCategoryRow name={category} key={category} />
            {products[category].map(product => (
              <ProductRow product={product} key={product._id} />
            ))}
          </tbody>
        ))}
      </table>
      <Tooltip content={'Add a new Product'} position={Position.BOTTOM}>
        <Button
          className={'mt-8'}
          icon={'add'}
          text={'New'}
          intent="primary"
          onClick={openDialog}
        />
      </Tooltip>
      <NewProductDialog
        isOpen={isOpen}
        hideDialog={closeDialog}
        confirmDialog={confirmDialog}
      />
    </div>
  );
};
