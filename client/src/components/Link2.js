import React from 'react'

const Link2 = ({ href, children, nowrap }) => {
  return (
    <a
      href={href}
      style={{ whiteSpace: nowrap && 'nowrap' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Link2
