import React from 'react';
import tree from '../../tree'
import Updates from './Updates';
import { Route } from 'react-router-dom';

const years = tree.updates;

const Body = () => {
  return (
    <>
      <Route path='/updates' render={() => <Updates years={years} />} />
    </>
  )
}

export default Body;