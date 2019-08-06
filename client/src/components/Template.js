/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react'

import { Image } from 'react-bootstrap'

import mq from './breakpoints'

const headerStyle = {
  fontSize: '2.5rem',
  fontWeight: 300,
  lineHeight: 1.2,
  [mq[1]]: {
    fontSize: '3.5rem'
  }
}

class Template extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { title, children, image, position, padding, link } = this.props
    return (
      <div className="p-0 p-sm-3 p-md-4 p-lg-5">
        <div
          className="row no-gutters bg-white"
          css={{
            disply: 'block',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            [mq[0]]: {
              border: '1px solid #dee2e6',
              borderRadius: '.25rem',
              boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'
            },
            [mq[2]]: {
              maxWidth: 1200
            }
          }}
        >
          <div className="col">
            <div>
              {image && (
                <Image
                  src={image}
                  alt=""
                  className="border-bottom bg-dark"
                  css={{
                    objectFit: 'cover',
                    width: '100%',
                    objectPosition: position,
                    height: 300,
                    padding: 0,
                    [mq[0]]: {
                      borderTopLeftRadius: '.25rem',
                      borderTopRightRadius: '.25rem'
                    },
                    [mq[1]]: {
                      height: 400,
                      padding: padding ? '0px 200px 0px 200px' : 0
                    }
                  }}
                />
              )}
            </div>
            <div className="px-3 pb-3 pt-2 px-md-4 pb-md-4 pt-md-3 p-lg-5">
              <div className="mb-4 mb-lg-5">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    css={headerStyle}
                  >
                    {title}
                  </a>
                ) : (
                  <div css={headerStyle}>{title}</div>
                )}
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Template
