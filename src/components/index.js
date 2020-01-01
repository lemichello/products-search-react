import React, { useState } from 'react';
import './style.css';
import { FilterableProductTable } from './FilterableProductTable';
import axios from 'axios';
import { Spinner } from '@blueprintjs/core';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  axios.interceptors.request.use(
    function resolveRequest(request) {
      setIsLoading(true);
      return request;
    },
    function rejectRequest(err) {
      setIsLoading(true);
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    function resolveResponse(response) {
      setIsLoading(false);
      return response;
    },
    function rejectResponse(err) {
      setIsLoading(false);
      return Promise.reject(err);
    }
  );

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
