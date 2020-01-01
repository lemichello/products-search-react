import React, { useState, useCallback } from 'react';
import groupBy from 'lodash/groupBy';
import './style.css';
import { ProductCategoryRow } from './components/ProductCategoryRow';
import { ProductRow } from './components/ProductRow';
import { Button, Tooltip, Position, Alert } from '@blueprintjs/core';
import { NewProductDialog } from './components/NewProductDialog';

export const ProductTable = function({ products, addProduct, deleteProduct }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(null);
  products = groupBy(products, x => x.category);

  const openDialog = () => {
    setDialogOpen(true);
  };

  let closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  let confirmDialog = useCallback(e => addProduct(e), [addProduct]);

  let triggerDeleteAlert = useCallback(e => {
    setRemovingProduct(e);
    setAlertOpen(true);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className={'text-align-start'}>Name</th>
            <th className={'text-align-start'}>Price</th>
            <th />
          </tr>
        </thead>
        {Object.keys(products).map(category => (
          <tbody key={category}>
            <ProductCategoryRow name={category} key={category} />
            {products[category].map(product => (
              <ProductRow
                product={product}
                triggerDeleteAlert={triggerDeleteAlert}
                key={product._id}
              />
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
        isOpen={isDialogOpen}
        hideDialog={closeDialog}
        confirmDialog={confirmDialog}
      />
      <Alert
        canEscapeKeyCancel={true}
        cancelButtonText={'Cancel'}
        confirmButtonText={'Delete'}
        icon={'trash'}
        intent={'danger'}
        isOpen={isAlertOpen}
        onCancel={() => {
          setRemovingProduct(null);
          setAlertOpen(false);
        }}
        onConfirm={() => {
          setAlertOpen(false);
          deleteProduct(removingProduct);
          setRemovingProduct(null);
        }}
      >
        <p>Are you sure you want to delete this product?</p>
      </Alert>
    </div>
  );
};
