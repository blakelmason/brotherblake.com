/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react'

import { Image } from 'react-bootstrap'

const breakpoints = [600, 992]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

class Template extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { title, children, image, position, padding, link } = this.props
    return (
      <div className="container">
        <div className="row no-gutters border rounded shadow">
          <div className="col">
            <div className="row no-gutters">
              {image && (
                <Image
                  src={image}
                  alt=""
                  className="rounded-top border-bottom bg-dark"
                  css={{
                    objectFit: 'cover',
                    width: '100%',
                    objectPosition: position,
                    height: 300,
                    padding: 0,
                    [mq[0]]: {
                      height: 400
                    },
                    [mq[1]]: {
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
