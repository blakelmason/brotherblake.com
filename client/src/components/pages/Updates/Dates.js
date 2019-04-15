import React from 'react';
import Article from '../../Article';
import NavItem from '../../NavItem';
import list from './list';

const Dates = () => {
  return (
    <Article title="Updates">
      <div className="row no-gutters" style={{}}>
        {list.map(date => (
          <Update key={`Dates${date}`} date={date} />
        ))}
      </div>
    </Article>
  );
};

const Update = ({ date }) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3"
      style={{ fontSize: '1.25rem' }}
    >
      <div className="border rounded shadow text-center m-2">
        <NavItem
          to={`/updates/${date.format('YYYY-MMMM-D')}`}
          display={date.format('MMMM D, YYYY')}
          className="py-2 py-md-4"
        />
      </div>
    </div>
  );
};

export default Dates;
