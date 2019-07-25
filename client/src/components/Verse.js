import React from 'react'

const Verse = ({ number, children, last }) => {
  return (
    <div>
      <span className="float-left" style={{ paddingRight: 12 }}>
        <strong>{number}</strong>
      </span>
      <div className={last ? 'mb-0' : 'mb-3'}>{children}</div>
    </div>
  )
}

export default Verse
