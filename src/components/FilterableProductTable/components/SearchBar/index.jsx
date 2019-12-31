import React, { useEffect, useState } from 'react';
import './style.css';

export const SearchBar = function({ filter }) {
  const [searchValue, setSearchValue] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  useEffect(() => {
    filter({ name: searchValue, stocked: showInStock });
  }, [showInStock, searchValue, filter]);

  return (
    <div className={'search-bar'}>
      <input
        className={'search-input'}
        type="text"
        placeholder={'Search...'}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onBlur={e => setSearchValue(e.target.value)}
      />
      <label htmlFor="show-stock">
        <input
          className={'show-in-stock-input'}
          type="checkbox"
          name="show-stock"
          checked={showInStock}
          onChange={() => setShowInStock(!showInStock)}
        />
        Only show products in stock
      </label>
    </div>
  );
};
