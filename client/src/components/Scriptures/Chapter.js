import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Chapter = ({ name, book, chapter }) => {
  return (
    <div className="col">
      <Link to={`article/${book}/${chapter}`}>
        <div>{name}</div>
      </Link>
    </div>
  )
}

export default withRouter(Chapter)
