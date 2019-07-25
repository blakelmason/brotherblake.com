/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

import Link2 from './Link2'

const Translation = ({ children, top }) => {
  const [show1, showTooltip1] = useState(false)
  const [show2, showTooltip2] = useState(false)
  return (
    <>
      <div className="d-inline-block">
        <div
          onClick={() => {
            show1 === true && show2 === true && showTooltip2(!show2)
            showTooltip1(!show1)
          }}
          css={{
            borderRadius: '50%',
            border: '2px solid #6610f2',
            width: 22,
            height: 22,
            color: show1 ? '#fff' : '#6610f2',
            cursor: 'pointer',
            background: show1 ? '#6610f2' : '#fff',
            transition: 'background .2s, color .2s',
            userSelect: 'none',
            '&:hover': {
              background: '#6610f2',
              color: 'white'
            }
          }}
          className="d-flex justify-content-center align-items-center shadow"
        >
          <strong>T</strong>
        </div>
      </div>
      <Collapse in={show1}>
        <div
          className="position-absolute border-indigo rounded bg-white mx-2 mx-sm-4 shadow mt-1"
          style={{ top: top }}
        >
          <div className="mb-0" style={{ padding: '14px 16px 16px 16px' }}>
            Translations are text changed from the{' '}
            <Link2 href="https://en.wikipedia.org/wiki/King_James_Version">
              KJV
            </Link2>
            . These are my opinion and do not represent official translations.
            The original text is provided below for comparison.
            <hr />
            <span className="text-indigo">Original: </span>
            {children}
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Translation
