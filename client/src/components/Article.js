/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Image } from 'react-bootstrap'

const breakpoints = [600, 992]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Article = ({ title, children, image, position, padding }) => {
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
          <div className="row no-gutters px-3 px-lg-5 pt-2 pt-lg-5">
            <div className="col">
              <div className="display-4">{title}</div>
            </div>
          </div>
          <div className="row no-gutters p-3 p-lg-5">
            <div className="col">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
