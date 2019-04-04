import React, { useState } from 'react';
import {
  Button,
  Collapse
} from 'react-bootstrap'
import {
  FaBars,
  FaCaretDown
} from 'react-icons/fa';
import { Transition } from 'react-transition-group'
import { Route } from 'react-router-dom'
import NavItem from '../NavItem';
import Title from './Title'

const Navbar = ({ sidebar, title }) => {
  const [open, toggleMenu] = useState(false);
  const toggle = () => toggleMenu(!open);
  return (
    <div className="sticky-top">
      <div className="shadow bg-white border-bottom py-1 px-md-4 px-lg-5 position-relative">
        <div style={{ maxWidth: 1300 }} className="m-auto py-0 py-xl-1">
          <Route
            path="/"
            exact
            children={({ match }) => {
              return (
                <>
                  {
                    match &&
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="px-2 px-md-1 text-center">
                      <NavItem display="Home" to="/" />
                      <NavItem display="Updates" to="/updates" />
                      <NavItem display="Scriptures" to="/scriptures" />
                      <NavItem display="Topics" to="/topics" />
                    </div>
                  }
                  {
                    !match &&
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="px-2 px-md-1">
                      <div>
                        <Button
                          onClick={sidebar}
                          className="p-1 p-md-2 text-grey border header-menu shadow d-flex justify-content-center align-items-center"
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
                          className="p-1 p-1 p-md-2 text-grey border header-menu shadow d-flex justify-content-center align-items-center"
                          size="sm"
                          variant="outline-light"
                        >
                          <Transition in={!open} timeout={300}>
                            {
                              state => {
                                const transition = {
                                  entering: { transform: 'rotate(0deg)' },
                                  entered: { transform: 'rotate(0deg)' },
                                  exiting: { transform: 'rotate(180deg)' },
                                  exited: { transform: 'rotate(180deg)' }
                                }
                                return <FaCaretDown
                                  size="1.5rem"
                                  style={{
                                    transition: 'transform .3s',
                                    transform: 'rotate(0deg)',
                                    ...transition[state]
                                  }}
                                />
                              }
                            }
                          </Transition>
                        </Button>
                      </div>
                    </div>
                  }
                </>
              )
            }

            }
          />
        </div>
      </div>
      <Collapse in={open} className="position-absolute px-md-4 px-lg-5" style={{ width: '100%', zIndex: -1 }}>
        <div>
          <div className="d-flex justify-content-center">
            <div style={{ maxWidth: 1300 }} className="flex-fill">
              <div
                className="bg-white border-bottom border-right border-left shadow rounded-bottom mx-1 mx-md-3 mx-lg-4 py-1 py-lg-2 text-center"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)'
                }}
              >
                <div onClick={toggle}>
                  <NavItem exact display="Home" to="/" />
                </div>
                <div onClick={toggle}>
                  <NavItem display="Updates" to="/updates" />
                </div>
                <div onClick={toggle}>
                  <NavItem display="Scriptures" to="/scriptures" />
                </div>
                <div onClick={toggle}>
                  <NavItem display="Topics" to="/topics" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default Navbar;