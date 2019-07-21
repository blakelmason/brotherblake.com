import React from 'react'

const QLink = ({ href, text }) => {
  return (
    <>
      (
      <a
        href={href}
        style={{ whiteSpace: 'nowrap' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
      )
    </>
  )
}

export default QLink
