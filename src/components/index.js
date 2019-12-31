import React, { useState } from 'react';
import './style.css';
import { FilterableProductTable } from './FilterableProductTable';
import axios from 'axios';
import { Spinner } from '@blueprintjs/core';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  axios.interceptors.request.use(request => {
    setIsLoading(true);
    return request;
  });

  axios.interceptors.response.use(response => {
    setIsLoading(false);
    return response;
  });

  return (
    <div className={'app'}>
      <FilterableProductTable />
      <div>
        {isLoading && (
          <Spinner className={'spinner'} size={Spinner.SIZE_LARGE} />
        )}
      </div>
    </div>
  );
}

export default App;
