import React from 'react';

const Section = ({ children }) => {
  return (
    <div
      className="border d-flex align-items-center justify-content-center bg-white"
      style={{ height: 45 }}
    >
      {children}
    </div>
  )
};

export default Section;