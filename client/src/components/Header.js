import React from 'react';
import {
  Image
} from 'react-bootstrap';
import header from '../images/header.jpg';

const Header = () => {
  return (
    <div style={{ height: 200 }} className="border-bottom">
      <Image src={header} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
    </div>
  )
}

export default Header