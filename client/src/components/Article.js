import React from 'react';
import { Image } from 'react-bootstrap';

const Article = ({ title, children, image }) => {
  return (
    <div className="row no-gutters m-md-4 m-lg-5">
      <div className="col px-0 d-flex justify-content-center">
        <div
          className="flex-fill bg-white"
          style={{
            maxWidth: 1300,
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.25)'
          }}
        >
          {image && (
            <div style={{ height: 240 }} className="border-bottom">
              <Image
                src={image}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          <div className="mb-4 m-md-4 m-lg-5 article">
            <h2>{title}</h2>
            <br />
            <hr />
            <br />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
