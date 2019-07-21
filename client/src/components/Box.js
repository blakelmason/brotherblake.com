import React from 'react'

const Box = ({ children, className }) => {
  return (
    <div
      className={`row no-gutters border rounded shadow p-3 mb-4 ${className}`}
    >
      <div className="col">{children}</div>
    </div>
  )
}

export default Box
