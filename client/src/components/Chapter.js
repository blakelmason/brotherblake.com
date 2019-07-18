import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Chapter = ({ name, link, match }) => {
  return (
    <div className="col">
      <Link to={`${match.url}/${link}`}>
        <div>{name}</div>
      </Link>
    </div>
  )
}

export default withRouter(Chapter)
