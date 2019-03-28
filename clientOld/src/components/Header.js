import React, { Component } from 'react';
import {
  Button,
  Collapse
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaRegArrowAltCircleRight
} from 'react-icons/fa';

class Header extends Component {
  state = {
    open: false
  }

  render() {

    return (
      <div className="bg-white shadow border-bottom" >
        <div className="container-fluid text-center py-1">
          <div className="row">
            <div className="col px-0 d-flex justify-content-center">
              <div className="flex-fill mx-2 mx-md-4 mx-lg-5"
                style={{ maxWidth: 1300 }}
              >
                <div className="row">
                  <div className="col justify-content-start d-flex">
                    <Button
                      onClick={this.props.sidebar}
                      className="ml-2 ml-md-0 p-1 text-grey border header-menu shadow2 d-flex justify-content-center align-items-center"
                      size="sm"
                      variant="outline-light"
                    >
                      <FaRegArrowAltCircleRight size="1.5rem" />
                    </Button>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center text-grey">
                    {this.props.title}
                  </div>
                  <div className="col d-flex justify-content-end">
                    <Button
                      onClick={() => this.setState({ open: !this.state.open })}
                      className="mr-2 mr-md-0 p-1 text-grey border header-menu shadow2 d-flex justify-content-center align-items-center"
                      size="sm"
                      variant="outline-light"
                    >
                      <FaBars size="1.5rem" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Collapse in={this.state.open} className="position-absolute w-100"
                  >
                    <div>
                      <div className="p-3 mx-2 bg-light border-bottom border-right border-left d-flex justify-content-around align-items-center mt-1 shadow position-relative" style={{ background: 'rgb(255, 255, 255' }}>
                        <div>Home</div>
                        <div>Updates</div>
                        <div>Scriptures</div>
                      </div>
                      <div>Scriptures</div>
                      <div>Scriptures</div>
                      <div>Scriptures</div>
                      <div>Scriptures</div>
                      <div>Scriptures</div>
                      <div>Scriptures</div>
                      <div>Scriptures</div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
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



export default Header;