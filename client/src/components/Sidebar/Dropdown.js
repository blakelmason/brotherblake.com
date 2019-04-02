import React, { useState } from 'react';
import {
  FaMinus
} from 'react-icons/fa';
import {
  Collapse,
} from 'react-bootstrap';

const Dropdown = ({ value, children }) => {
  const [open, toggle] = useState(false);
  return (
    <>
      <div
        className="bg-white d-flex align-items-center pl-3"
        style={{ height: 45 }}
        onClick={() => toggle(!open)}
      >
        {value}
        <div className="ml-auto mr-3">
          <FaMinus
            style={{ transition: 'opacity .3s', opacity: open === false ? 1 : 0, transform: 'rotate(90deg)' }}
          />
          <FaMinus
            style={{ marginLeft: -16 }}
          />
        </div>
      </div>
      <Collapse in={open}>
        <div>
          {children}
        </div>
      </Collapse>
    </>
  )
}

export default Dropdown;