import React from 'react';
import { Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Article = ({ title, children, image, description, url, position }) => {
  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="BrotherBlake.com" />
      </Helmet>
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
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: position && position
                  }}
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
    </>
  );
};

export default Article;
