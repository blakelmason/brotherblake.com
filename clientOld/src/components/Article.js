import React from 'react';

const Article = ({ title, children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col px-0 d-flex justify-content-center">
          <div className="p-2 p-md-4 p-lg-5 m-md-4 m-lg-5 shadow border flex-fill article bg-light"
            style={{ maxWidth: 1300 }}
          >
            <h2 className="pt-3 pt-md-0">{title}</h2>
            <br />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;