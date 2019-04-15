import React from 'react';
import Header from './Header';
import NavItem from '../NavItem';
import list from '../pages/Updates/list';

const Updates = () => {
  return (
    <>
      <Header>
        <NavItem
          to="/updates"
          display="Updates"
          className="h5 mb-0 text-center d-flex align-items-center justify-content-center text-dark"
          style={{ height: 45 }}
          exact
        />
      </Header>
      <div className="border-top border-right border-left bg-white">
        {list.map(date => (
          <Update key={`Sidebar${date}`} date={date} />
        ))}
      </div>
    </>
  );
};

const Update = ({ date }) => {
  return (
    <NavItem
      to={`/updates/${date.format('YYYY-MMMM-D')}`}
      display={`${date.format('MMMM D')}`}
      className="border-bottom"
    />
  );
};

export default Updates;
