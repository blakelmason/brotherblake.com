import React from 'react';

const Article = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-center px-0">
          <div
            className="bg-white p-4 p-lg-5 m-0 m-sm-3 m-md-5 flex-fill shadow"
            style={{ maxWidth: 1200 }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;