/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import mq from './breakpoints'

const Header = ({ error }) => {
  return (
    <div className="mb-sm-3 mb-lg-5">
      <div
        className="container"
        css={{
          background: '#fff',
          [mq[0]]: {
            background: '#f8f9fa'
          }
        }}
      >
        <div className="text-center m-3" style={{ fontSize: '1.25rem' }}>
          {error ? (
            <a href="/" className="brand">
              brotherblake.com
            </a>
          ) : (
            <Link to="/" className="brand">
              brotherblake.com
            </Link>
          )}
        </div>
        <div />
      </div>
      <div className="text-center border-top border-bottom bg-white">
        <div
          className="container"
          css={{
            background: '#f8f9fa',
            [mq[0]]: {
              background: '#fff'
            }
          }}
        >
          <div className="row no-gutters">
            <div className="col">
              {error ? (
                <Link2 to="/">Home</Link2>
              ) : (
                <LinkContainer to="/" exact>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              )}
            </div>
            <div className="col">
              {error ? (
                <Link2 to="/scriptures">Scriptures</Link2>
              ) : (
                <LinkContainer to="/scriptures" exact>
                  <Nav.Link>Scriptures</Nav.Link>
                </LinkContainer>
              )}
            </div>
            <div className="col">
              {error ? (
                <Link2 to="/topics">Topics</Link2>
              ) : (
                <LinkContainer to="/topics" exact>
                  <Nav.Link>Topics</Nav.Link>
                </LinkContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Link2 = ({ to, children }) => {
  return (
    <div style={{ padding: '8px 16px 8px 16px' }}>
      <a href={to}>{children}</a>
    </div>
  )
}

export default Header
