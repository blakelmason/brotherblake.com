import React from 'react'

import image from '../../images/scriptures.jpg'

import Template from '../Template'
import Chapter from './Chapter'

const noWrap = {
  whiteSpace: 'nowrap'
}

const Scriptures = () => {
  return (
    <Template title="Scriptures" image={image} position="50% 35%" padding>
      <div className="row" style={noWrap}>
        <Work name="Old Testament" />
        <Work name="New Testament" />
        <Work name="Book of Mormon" />
        <Work name="Doctrine and Covenants">
          <Book name="Doctrine and Covenants">
            <Chapter name="Section 24" book="dc" chapter="24" />
          </Book>
        </Work>
        <Work name="Pearl of Great Price" />
      </div>
    </Template>
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

const Book = ({ name, children }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="h5">
            <u>{name}</u>
          </div>
        </div>
      </div>
      <div className="row">{children}</div>
    </>
  )
}

export default Scriptures
