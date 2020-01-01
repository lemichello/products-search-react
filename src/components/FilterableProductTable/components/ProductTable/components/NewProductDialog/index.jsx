import './style.css';
import React, { useState } from 'react';
import {
  Dialog,
  InputGroup,
  Classes,
  FormGroup,
  NumericInput,
  Switch,
  Button
} from '@blueprintjs/core';

export const NewProductDialog = function({
  isOpen,
  hideDialog,
  confirmDialog
}) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('1');
  const [stocked, setStocked] = useState(true);

  const onClose = () => {
    setName('');
    setCategory('');
    setPrice('1');
    setStocked(true);
    hideDialog();
  };

  const addProduct = () => {
    confirmDialog({
      name,
      category,
      price: '$' + price,
      stocked
    });
    onClose();
  };

  const validateProduct = () => {
    return name && category && price > 0;
  };

  return (
    <Dialog
      icon={'plus'}
      title={'New Product'}
      canOutsideClickClose={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={Classes.DIALOG_BODY}>
        <FormGroup
          label={'Description'}
          labelInfo={'(required)'}
          labelFor={'text-input'}
        >
          <InputGroup
            className={'mb-10 w-220'}
            placeholder={'Name'}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <InputGroup
            className={'mb-10 w-220'}
            placeholder={'Category'}
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </FormGroup>
        <FormGroup
          label={'Price'}
          labelInfo={'(required)'}
          labelFor={'numeric-input'}
        >
          <NumericInput
            min={1}
            leftIcon={'dollar'}
            value={price}
            onValueChange={(_, value) => setPrice(value)}
          />
        </FormGroup>
        <Switch
          className={'w-220'}
          large={true}
          checked={stocked}
          label={'In stock'}
          onChange={e => setStocked(e.target.checked)}
        />
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button intent={'warning'} icon={'cross'} onClick={onClose}>
            Close
          </Button>
          <Button
            icon={'confirm'}
            intent={'success'}
            onClick={addProduct}
            disabled={!validateProduct()}
          >
            Confirm
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
