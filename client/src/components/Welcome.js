import React from 'react';
import Scripture from './Scripture';
import Article from './Article';

const Welcome = () => {
  return (
    <Article>
      <h2>Welcome!</h2>
      <br />
      <p>The purpose of this website is to share my personal Gospel insights and musings. My goal is to deepen other's understanding of the teachings of Jesus Christ, and especially within the context of the scriptures.</p>
      <p>In Matthew 13, Jesus shared the following parable.</p>
      <Scripture r="Matthew 13 : 3 - 8" />
      <p>Then later in verse 19, Jesus gives the interpretation for the seeds that "fell by the wayside" as described in verse 4.</p>
      <Scripture r="Matthew 13 : 19" />
      <p>Here we learn from the Savior that one of the dangers we face is to lack a sufficient understanding of his words. I pray to our Father that you will be inspired by the Holy Ghost, and receive understanding through his presence, that you will be protected in the moments when the adversary attempts to "catcheth away" the seed of faith sown in your heart, and I do so in the name of Jesus Christ.</p>
      <br />
      <br />
      <p>Thank you for visiting, and I hope that what you find here will bring you light and truth!</p>
      <br />
      <br />
      <h4>- Brother Blake</h4>
    </Article>
  )
}

export default Welcome;