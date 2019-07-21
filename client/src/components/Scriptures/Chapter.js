import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Chapter = ({ collection, book, chapter }) => {
  return (
    <div className="col">
      <Link to={`scriptures/${collection}-${book}-${chapter}`}>
        <div style={{ fontSize: '1.25rem' }}>{chapter}</div>
      </Link>
    </div>
  )
}

export default withRouter(Chapter)
