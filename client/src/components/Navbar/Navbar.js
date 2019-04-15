/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { Transition } from 'react-transition-group';
import { Route } from 'react-router-dom';
import NavItem from '../NavItem';
import Title from './Title';
import mq from '../utils/mq';

const Navbar = ({ sidebar, menu, title }) => {
  const [open, toggleMenu] = useState(false);
  const toggle = () => toggleMenu(!open);
  menu === false && open === true && toggleMenu(false);
  return (
    <div className="sticky-top mb-md-4 mb-lg-5">
      <div
        className="bg-white border-bottom px-md-4 px-lg-5 position-relative"
        style={{ boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.15)' }}
      >
        <div style={{ maxWidth: 1300 }} className="m-auto">
          <Route
            path="/"
            exact
            children={({ match }) => {
              return (
                <>
                  {match && (
                    <div
                      css={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        padding: '1px 0px 1px 0px',
                        [mq.md]: {
                          padding: '3px 0px 3px 0px'
                        }
                      }}
                      className="px-2 px-md-1 text-center"
                    >
                      <NavItem display="Home" to="/" className="rounded" />
                      <NavItem
                        display="Updates"
                        to="/updates"
                        className="rounded"
                      />
                      <NavItem
                        display="Scriptures"
                        to="/scriptures"
                        className="rounded"
                      />
                      <NavItem
                        display="Topics"
                        to="/topics"
                        className="rounded"
                      />
                    </div>
                  )}
                  {!match && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        padding: '4px 0px 4px 0px'
                      }}
                      className="px-2 px-md-0"
                    >
                      <div>
                        <Button
                          onClick={sidebar}
                          className="text-grey border shadow d-flex justify-content-center align-items-center"
                          css={{
                            padding: 4,
                            [mq.md]: {
                              padding: 6
                            }
                          }}
                          size="sm"
                          variant="outline-light"
                        >
                          <FaBars size="1.5rem" />
                        </Button>
                      </div>
                      <div
                        className="text-grey d-flex align-items-center justify-content-center"
                        style={{ fontSize: '1.1rem' }}
                      >
                        <Title title={title} />
                      </div>
                      <div className="ml-auto">
                        <Button
                          onClick={toggle}
                          className="text-grey border shadow d-flex justify-content-center align-items-center"
                          css={{
                            padding: 4,
                            [mq.md]: {
                              padding: 6
                            }
                          }}
                          size="sm"
                          variant="outline-light"
                        >
                          <Transition in={!open} timeout={300}>
                            {state => {
                              const transition = {
                                entering: { transform: 'rotate(0deg)' },
                                entered: { transform: 'rotate(0deg)' },
                                exiting: { transform: 'rotate(180deg)' },
                                exited: { transform: 'rotate(180deg)' }
                              };
                              return (
                                <FaCaretDown
                                  size="1.5rem"
                                  style={{
                                    transition: 'transform .3s',
                                    transform: 'rotate(0deg)',
                                    ...transition[state]
                                  }}
                                />
                              );
                            }}
                          </Transition>
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              );
            }}
          />
        </div>
      </div>
      <Collapse
        in={open}
        className="position-absolute px-md-4 px-lg-5"
        style={{ width: '100%', zIndex: -1 }}
      >
        <div>
          <div className="d-flex justify-content-center">
            <div style={{ maxWidth: 1300 }} className="flex-fill">
              <div
                className="bg-white border-bottom border-right border-left shadow rounded-bottom mx-1 mx-md-3 mx-lg-4 text-center"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)'
                }}
                css={{
                  gridGap: 0,
                  padding: '4px 2px 2px 2px',
                  [mq.lg]: {
                    gridGap: 8,
                    padding: 8
                  },
                  [mq.xl]: {
                    gridGap: 10,
                    padding: '10px 10px 8px 10px'
                  }
                }}
              >
                <div onClick={toggle}>
                  <NavItem
                    exact
                    display="Home"
                    to="/"
                    className="rounded py-2 p-md-2 px-0"
                  />
                </div>
                <div onClick={toggle}>
                  <NavItem
                    display="Updates"
                    to="/updates"
                    className="rounded py-2 p-md-2 px-0"
                  />
                </div>
                <div onClick={toggle}>
                  <NavItem
                    display="Scriptures"
                    to="/scriptures"
                    className="rounded py-2 p-md-2 px-0"
                  />
                </div>
                <div onClick={toggle}>
                  <NavItem
                    display="Topics"
                    to="/topics"
                    className="rounded py-2 p-md-2 px-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Navbar;
