import React from 'react'
import { Image } from 'react-bootstrap'

import gif from '../images/loading.gif'

const Loading = () => {
  return (
    <div>
      <Image src={gif} fluid />
    </div>
  )
}

export default Loading
