/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react'

import { Image } from 'react-bootstrap'

import mq from './breakpoints'

class Template extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { title, children, image, position, padding, link } = this.props
    return (
      <div className="container px-0 px-md-3">
        <div
          className="row no-gutters bg-white"
          css={{
            [mq[0]]: {
              border: '1px solid #dee2e6',
              borderRadius: '.25rem',
              boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'
            }
          }}
        >
          <div className="col">
            <div className="row no-gutters">
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
            <div
              className={`row no-gutters ${
                link ? 'px-3 px-lg-5 pt-2 pt-lg-5' : 'px-3 px-lg-5 pt-2 pt-lg-5'
              }`}
            >
              <div className="col">
                <div>
                  {link ? (
                    <a
                      href={link}
                      style={{ fontSize: '2rem', fontWeight: 300 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  ) : (
                    <div className="display-4">{title}</div>
                  )}
                </div>
              </div>
            </div>
            <div className={`p-3 ${link ? 'px-lg-5 pb-lg-5' : 'p-lg-5'}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Template
