import React from 'react'
import { Image } from 'react-bootstrap'

const Image2 = ({ src, pb }) => {
  return (
    <div
      className={`d-flex justify-content-center ${pb && 'pb-5'}`}
      style={{ paddingTop: 32 }}
    >
      <div
        className="text-center border border-dark shadow"
        style={{ maxWidth: 600 }}
      >
        <Image src={src} fluid />
      </div>
    </div>
  )
}

export default Image2
