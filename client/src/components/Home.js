import React from 'react'

import image from '../images/mormon.jpg'

import Article from './Article'

const Home = () => {
  return (
    <Article title="Welcome!" image={image} position="50% 35%" padding>
      <p>
        This is my website for organizing and sharing Gospel information. I use
        it to record information I learn from the scriptures and as a reference.
        The "Scriptures" section follows specific chapters in the scriptures.
        The "Topics" section has information organized by topic.
      </p>
      <p>Below are links to the newest or recently updated sections.</p>
    </Article>
  )
}

export default Home
