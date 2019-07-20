import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="mb-3 mb-lg-5">
      <div className="container">
        <div className="text-center m-3" style={{ fontSize: '1.25rem' }}>
          <Link to="/" className="brand">
            BrotherBlake.com
          </Link>
        </div>
        <div />
      </div>
      <div className="text-center border-top border-bottom bg-light">
        <div className="container">
          <div className="row no-gutters">
            <div className="col">
              <LinkContainer to="/" exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </div>
            <div className="col">
              <LinkContainer to="/scriptures" exact>
                <Nav.Link>Scriptures</Nav.Link>
              </LinkContainer>
            </div>
            <div className="col">
              <LinkContainer to="/topics" exact>
                <Nav.Link>Topics</Nav.Link>
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
