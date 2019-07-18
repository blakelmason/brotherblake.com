import React from 'react'

import image from '../images/scriptures.jpg'

import Article from './Article'
import Chapter from './Chapter'

const noWrap = {
  whiteSpace: 'nowrap'
}

const Scriptures = () => {
  return (
    <Article title="Scriptures" image={image} position="50% 35%" padding>
      <div className="row" style={noWrap}>
        <Work name="Old Testament">
          <div className="row">
            <div className="col">
              <div className="h5">
                <u>Isaiah</u>
              </div>
            </div>
          </div>
          <div className="row">
            <Chapter name="Isaiah 1" link="isaiah1" />
          </div>
        </Work>
        <Work name="New Testament" />
        <Work name="Book of Mormon" />
        <Work name="Doctrine and Covenants" />
        <Work name="Pearl of Great Price" />
      </div>
    </Article>
  )
}

const Work = ({ name, children }) => {
  return (
    <div className="col-auto">
      <div className="border rounded p-2 bg-light d-inline-block h4 mb-0">
        <strong>{name}</strong>
      </div>
      <div className="mx-2 mt-2 mb-4">{children}</div>
    </div>
  )
}

export default Scriptures
