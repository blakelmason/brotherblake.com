import React from 'react';
import Updates from './Updates';
import { Route } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <Route path="/updates" render={() => <Updates />} />
    </>
  );
};

export default Body;
