/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React, { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { Collapse } from 'react-bootstrap';

const Dropdown = ({ value, children, close }) => {
  const [open, toggle] = useState(false);
  close && toggle(false);
  return (
    <>
      <div
        className="bg-white d-flex align-items-center pl-3 border-bottom"
        style={{ height: 45 }}
        onClick={() => toggle(!open)}
        css={{
          cursor: 'pointer',
          transition: 'background ',
          '&:hover': {
            background: 'hsl(210, 15%, 96%)!important'
          }
        }}
      >
        {value}
        <div className="ml-auto mr-3">
          <FaMinus
            style={{
              transition: 'opacity .3s',
              opacity: open === false ? 1 : 0,
              transform: 'rotate(90deg)'
            }}
          />
          <FaMinus style={{ marginLeft: -16 }} />
        </div>
      </div>
      <Collapse in={open} unmountOnExit>
        <div>{children}</div>
      </Collapse>
    </>
  );
};

export default Dropdown;
