import React, { Suspense, lazy } from 'react';
import moment from 'moment';
import Loading from '../../components/Loading';
import { Route, Switch } from 'react-router-dom';
import Dates from './Dates';

const Updates = ({ path }) => {
  return (
    <Switch>
      <Route exact path={'/updates'} component={Dates} />
      <Route path={path} render={() => <Loader path={path} />} />
    </Switch>
  );
};

const Loader = ({ path }) => {
  const split = path.split('/');
  const date = moment(split[2], 'YYYY-MMMM-D');
  const load = date.format('YYYY/MM/DD');
  const LazyComponent = lazy(() => import(`./content/${load}`));
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default Updates;
