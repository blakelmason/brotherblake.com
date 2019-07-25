import React from 'react'

const Box = ({ children, className, link, nm }) => {
  return (
    <div
      className={`row no-gutters border rounded shadow p-3 mt-2 ${!nm &&
        'mb-4'} ${className}`}
    >
      <div className="col justify">
        {link && (
          <h5 className="mb-3">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </h5>
        )}
        {children}
      </div>
    </div>
  )
}

export default Box
