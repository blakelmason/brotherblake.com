/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import mq from './utils/mq';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import NavItem from './NavItem';
import list from '../pages/Updates/list';

const Header = () => {
  return (
    <div>
      <div
        className="shadow d-flex position-relative justify-content-center px-2 px-md-4 px-lg-5 bg-white"
        style={{ zIndex: 1 }}
      >
        <div className="row no-gutters flex-fill" style={{ maxWidth: 1300 }}>
          <div className="col mr-auto d-none d-md-flex align-items-center">
            <Newest />
          </div>
          <div className="col-auto">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="py-2 py-md-3"
                css={{
                  [mq.md]: { textAlign: 'center' }
                }}
              >
                <div className="h5 mb-0">BrotherBlake.com</div>
                <div className="text-secondary" style={{ fontSize: '.95rem' }}>
                  Gospel Insights and Musings
                </div>
              </div>
            </Link>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <Button
              className="p-1 text-grey2 shadow border"
              variant="outline-light"
              onClick={() =>
                window.open(
                  'https://www.facebook.com/brotherblakewebsite',
                  '_blank'
                )
              }
            >
              <FaFacebook size="2.15rem" />
            </Button>
            <div style={{ width: 12 }} />
            <Button
              className="p-1 text-grey2 shadow border"
              variant="outline-light"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/brotherblakewebsite',
                  '_blank'
                )
              }
            >
              <FaInstagram size="2.15rem" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Newest = () => {
  return (
    <NavItem
      display={`Newest Update - ${list[0].format('MMMM D')}`}
      to={`/updates/${list[0].format('YYYY-MMMM-D')}`}
      exact
      className="rounded text-grey px-0 py-1 text-center"
      style={{
        '&:hover': { background: 'inherit!important' }
      }}
    />
  );
};

export default Header;
