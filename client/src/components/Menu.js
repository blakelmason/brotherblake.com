import React, { useState } from 'react';
import {
  Button,
  Collapse
} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import {
  FaBars,
  FaCaretDown
} from 'react-icons/fa';
import { Transition } from 'react-transition-group'

const Menu = ({ sidebar }) => {
  const [open, toggle1] = useState(false);
  return (
    <div className="sticky-top">
      <div className="d-flex justify-content-center mx-md-4 mx-lg-5">
        <div style={{ maxWidth: 1300 }} className="position-relative flex-fill">
          <Collapse in={open} className="position-absolute w-100 pt-md-2" style={{ top: 40 }}>
            <div>
              <div
                className="p-3 p-lg-4 mx-1 mx-md-2 mx-lg-4 bg-white border-bottom border-right border-left shadow rounded-bottom"
              >
                <div>Home</div>
                <div>Updates</div>
                <div>Scriptures</div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <div className="shadow bg-white border-bottom py-1 px-md-4 px-lg-5 position-relative">
        <div style={{ maxWidth: 1300 }} className="m-auto py-lg-1">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }} className="mx-2 mx-md-1">
            <div>
              <Button
                onClick={() => sidebar()}
                className="p-1 p-md-2 text-grey border header-menu shadow d-flex justify-content-center align-items-center"
                size="sm"
                variant="outline-light"
              >
                <FaBars size="1.5rem" />
              </Button>
            </div>
            <div className="text-grey d-flex align-items-center justify-content-center">Home</div>
            <div className="ml-auto">
              <Button
                onClick={() => toggle1(!open)}
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
        </div>
      </div>
    </div >
  )
}

// const Item = (props) => {
//   let display = props.name.charAt(0).toUpperCase() + props.name.slice(1);
//   return (
//     <Link
//       to={`/${props.name}`}
//       className={`px-2 nav-link ml-auto ${props.active === props.name && 'active disabled'}`}
//       onClick={() => props.click(props.name)}
//       style={{ width: 'fit-content' }}
//     >{display}</Link>
//   );
// }



export default Menu;