import React from 'react';

const Section = ({ children }) => {
  return (
    <div
      className="border d-flex align-items-center justify-content-center bg-white"
      style={{ height: 45 }}
    >
      <h5 className="m-0">
        {children}
      </h5>
    </div>
  )
};

export default Section;