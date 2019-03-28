import React from 'react';
import {
  Image
} from 'react-bootstrap';
import header from '../images/header.jpg';
import { Link } from 'react-router-dom';

const Backdrop = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="py-3 bg-white border-bottom text-center">
          <div className="h5 mb-0">BrotherBlake.com</div>
          <div className="text-secondary" style={{ fontSize: '.95rem' }}>Gospel Insights and Musings</div>
        </div>
      </Link>
      <div style={{ height: 240 }}>
        <Image src={header} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      </div>
    </>
  )
}

export default Backdrop;