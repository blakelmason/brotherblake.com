import React from 'react'
import { Link } from 'react-router-dom'

import Template from './Template'

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
      <New
        date="July 20, 2019"
        to="scriptures/bom-nephi3-18"
        name="3 Nephi 18"
      />
      <New date="July 18, 2019" to="scriptures/bom-alma-51" name="Alma 51" />
      <New
        m0
        date="July 18, 2019"
        to="scriptures/dc-section-24"
        name="Doctrine and Covenants 24"
      />
    </Template>
  )
}

const New = ({ m0, date, to, name }) => {
  return (
    <div className={`${m0 ? '' : 'mb-3'}`} style={{ whiteSpace: 'nowrap' }}>
      <div>
        <u>{date}</u>
      </div>
      <div>
        <Link to={to}>{name}</Link>
      </div>
    </div>
  )
}

export default Home
