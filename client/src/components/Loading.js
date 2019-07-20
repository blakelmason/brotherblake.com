import React from 'react'
import { Image } from 'react-bootstrap'

import gif from '../images/loading.gif'

const Loading = () => {
  return (
    <div className="d-flex flex-fill justify-content-center align-items-center">
      <div>
        <Image src={gif} fluid />
      </div>
    </div>
  )
}

export default Loading
