import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Chapter = ({ work, book, chapter }) => {
  return (
    <div className="col">
      <Link to={`articles/${work}/${book}/${chapter}`}>
        <div style={{ fontSize: '1.25rem' }}>{chapter}</div>
      </Link>
    </div>
  )
}

export default withRouter(Chapter)
