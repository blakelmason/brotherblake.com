import React from 'react';

const Video = ({ src }) => {
  return (
    <div className="d-flex justify-content-center my-4 my-lg-5 mx-2 mx-md-0">
      <div
        style={{ maxWidth: 700 }}
        className="flex-fill p-2 p-md-3 border shadow"
      >
        <div className="aspect-ratio">
          <iframe
            src={src + '?rel=0'}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={src}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
