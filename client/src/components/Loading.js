import React from 'react';
import svg from '../images/loading.svg';
import { Image } from 'react-bootstrap';

const Loading = () => (
  <div className="d-flex justify-content-center">
    <Image src={svg} alt="" style={{ width: 60, height: '100%' }} />
  </div>
);

export default Loading;
