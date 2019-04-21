/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line
import React from 'react';
import { Image } from 'react-bootstrap';
import mq from './utils/mq';

const Quote = ({ url, children, link, image }) => {
  return (
    <div className="mx-2 mx-md-0 my-4 my-lg-5">
      <div className="border p-2 p-md-3 shadow bg-white">
        {link && (
          <h5 className="text-center d-sm-none p-1">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </h5>
        )}
        <div className="d-inline-block">
          {image && (
            <div
              className="float-left mr-3 border border shadow"
              css={{ zIndex: 10, padding: 2 }}
            >
              <Image
                fluid
                src={image}
                css={{
                  height: 200,
                  maxWidth: 165,
                  objectFit: 'cover',
                  [mq.md]: { maxWidth: 'none', height: 250 }
                }}
              />
            </div>
          )}
          {link && (
            <h5 className="text-center d-none d-sm-block mb-3">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </h5>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Quote;
