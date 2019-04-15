import React from 'react';
import { Image } from 'react-bootstrap';
import backdrop from '../images/backdrop.jpg';

const Backdrop = () => {
  return (
    <div style={{ height: 225 }} className="border-top">
      <Image
        src={backdrop}
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Backdrop;
