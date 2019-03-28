import React, { Component } from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
  state = {
    active: window.location.pathname.substr(1)
  }

  click = (name) => {
    this.setState({
      active: name
    })
  }

  render() {
    return (
      <div className="position-absolute" style={{ width: '100vw', background: 'rgb(255, 255, 255, .80)', zIndex: '900' }}>
        <Navbar className="px-0 mx-3 mx-md-4 mx-lg-5" expand="md">
          <Navbar.Brand href="#" className="p-0 m-0">
            <div>BrotherBlake.com</div>
            <div className="text-secondary" style={{ fontSize: '.95rem' }}>Gospel Insights and Musings</div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto pt-3 pt-md-0">
              <Link
                to="/"
                className={`px-2 nav-link ml-auto ${this.state.active === '' && 'active disabled'}`}
                onClick={() => this.setState({ active: '' })}
                style={{ width: 'fit-content' }}
              >Home</Link>
              <Item name="updates" active={this.state.active} click={this.click} />
              <Item name="isaiah" active={this.state.active} click={this.click} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="border-bottom" />
      </div>
    );
  }
}

const Item = (props) => {
  let display = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  return (
    <Link
      to={`/${props.name}`}
      className={`px-2 nav-link ml-auto ${props.active === props.name && 'active disabled'}`}
      onClick={() => props.click(props.name)}
      style={{ width: 'fit-content' }}
    >{display}</Link>
  );
}

export default Menu;