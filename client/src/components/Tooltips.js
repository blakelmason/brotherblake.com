/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

import Link2 from './Link2'

export const T = ({ children }) => {
  return (
    <Tooltip color="#6610f2" letter="T">
      <>
        <span className="text-indigo">Translation:</span> Translations are text
        changed from the{' '}
        <Link2 href="https://en.wikipedia.org/wiki/King_James_Version">
          KJV
        </Link2>
        . These are my opinion and generally do not represent official
        translations. The original text is provided below for comparison.
        <hr />
        <span className="text-indigo">Original: </span>
        {children}
      </>
    </Tooltip>
  )
}

export const D = ({ children }) => {
  return (
    <Tooltip color="#20c997" letter="D">
      <>
        <span className="text-teal">Definition: </span>
        {children}
      </>
    </Tooltip>
  )
}

const Tooltip = ({ children, color, letter }) => {
  const [show, showTooltip] = useState(false)
  return (
    <>
      <div className="d-inline-block">
        <div
          onClick={() => {
            showTooltip(!show)
          }}
          css={{
            borderRadius: '50%',
            border: '2px solid ' + color,
            width: 22,
            height: 22,
            color: show ? '#fff' : color,
            cursor: 'pointer',
            background: show ? color : '#fff',
            transition: 'background .2s, color .2s',
            userSelect: 'none',
            '&:hover': {
              background: color,
              color: 'white'
            }
          }}
          className="d-flex justify-content-center align-items-center shadow"
        >
          <strong>{letter}</strong>
        </div>
      </div>
      <Collapse in={show}>
        <div
          className="position-absolute rounded bg-white mx-2 mx-sm-4 shadow mt-1"
          css={{ border: '1px solid ' + color }}
        >
          <div className="mb-0" style={{ padding: '14px 16px 16px 16px' }}>
            {children}
          </div>
        </div>
      </Collapse>
    </>
  )
}
