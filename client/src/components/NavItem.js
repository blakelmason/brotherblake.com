/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React, { useContext } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { APP } from '../Context';

const NavItem = ({ display, to, exact, className, style }) => {
  const context = useContext(APP);
  function home() {
    window.scrollTo(0, 0);
    context.sidebar();
  }
  return (
    <NavLink
      onClick={() => {
        to === '/' ? home() : window.scrollTo(0, 0);
      }}
      exact={exact}
      to={to}
      className={`nav-link hover ${className}`}
      css={style}
      activeClassName="active text-dark"
    >
      {display}
    </NavLink>
  );
};

export default NavItem;
