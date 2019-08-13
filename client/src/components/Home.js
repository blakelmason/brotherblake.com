/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'

import Template from './Template'

import mq from './breakpoints'

const Home = () => {
  return (
    <Template
      title="Welcome!"
      image="https://i.imgur.com/HnE0CFb.jpg"
      position="50% 50%"
    >
      <p>
        This is my website for organizing and sharing Gospel information. I use
        it to record information I learn from the scriptures and as a reference.
        The "Scriptures" section follows specific chapters in the scriptures.
        The "Topics" section has information organized by topic.
      </p>
      <p>Below are links to the newest or recently updated sections.</p>
      <br />
      <div
        css={{
          columnCount: 1,
          columnGap: 24,
          columnRule: '1px solid #ecebeb',
          [mq[0]]: {
            columnCount: 2
          },
          [mq[1]]: {
            columnCount: 3
          }
        }}
      >
        <New
          date="August 12, 2019"
          to="/scriptures/Old_Testament/Ezekiel/37"
          name="Ezekiel 37"
        />
        <New
          date="August 5, 2019"
          to="/topics/G/Gog_and_Magog"
          name="Gog and Magog"
        />
        <New
          date="August 3, 2019"
          to="/scriptures/New_Testament/1_Corinthians/10"
          name="1 Corinthians 10"
        />
        <New
          date="July 31, 2019"
          to="/scriptures/New_Testament/Acts/2"
          name="Acts 2"
        />
        <New
          date="July 29, 2019"
          to="/scriptures/Book_of_Mormon/Alma/59"
          name="Alma 59"
        />
        <New
          date="July 29, 2019"
          to="/scriptures/Book_of_Mormon/2_Nephi/26"
          name="2 Nephi 26"
        />
        <New
          date="July 28, 2019"
          to="scriptures/Old_Testament/Isaiah/2"
          name="Isaiah 2"
        />
        <New
          date="July 25, 2019"
          to="scriptures/Old_Testament/Isaiah/1"
          name="Isaiah 1"
        />
        <New date="July 25, 2019" to="topics/A/Assyria" name="Assyria" />
        <New date="July 25, 2019" to="topics/I/Isaiah" name="Isaiah" />
        <New
          date="July 25, 2019"
          to="topics/K/Kingdom_of_Israel"
          name="Kingdom of Israel"
        />
        <New date="July 25, 2019" to="topics/R/Remnant" name="Remnant" />
        <New
          date="July 20, 2019"
          to="scriptures/Book_of_Mormon/3_Nephi/18"
          name="3 Nephi 18"
        />
        <New
          date="July 18, 2019"
          to="scriptures/Book_of_Mormon/Alma/51"
          name="Alma 51"
        />
        <New
          m0
          date="July 18, 2019"
          to="scriptures/Doctrine_and_Covenants/Section/24"
          name="D&C 24"
        />
      </div>
    </Template>
  )
}

const New = ({ m0, date, to, name }) => {
  return (
    <div
      className={`${!m0 && 'mb-4'}`}
      css={{
        whiteSpace: 'nowrap',
        breakInside: 'avoid',
        textAlign: 'left',
        [mq[0]]: {
          textAlign: 'center'
        }
      }}
    >
      <div className="h6 mb-0">
        <u>{date}</u>
      </div>
      <div style={{ fontSize: '1.2rem' }}>
        <Link to={to}>{name}</Link>
      </div>
    </div>
  )
}

export default Home
