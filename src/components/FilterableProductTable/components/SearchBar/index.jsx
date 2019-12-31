import './style.css';
import React, { useEffect, useState } from 'react';
import { Checkbox, InputGroup } from '@blueprintjs/core';

export const SearchBar = function({ filter }) {
  const [searchValue, setSearchValue] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  useEffect(() => {
    filter({ name: searchValue, stocked: showInStock });
  }, [showInStock, searchValue, filter]);

  return (
    <div className={'search-bar'}>
      <InputGroup
        type={'search'}
        className={'search-input'}
        leftIcon={'search-text'}
        placeholder={'Search...'}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <Checkbox
        checked={showInStock}
        onChange={() => setShowInStock(!showInStock)}
      >
        Only show products in stock
      </Checkbox>
    </div>
  );
};
