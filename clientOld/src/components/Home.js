import React, { Component } from 'react';
import Scripture from './Scripture';
import Article from './Article';

class Home extends Component {
  render() {
    return (
      <Article title="Welcome!">
        <p>The purpose of this website is to share my personal Gospel insights and musings. My goal is to deepen others' understanding of the teachings of Jesus Christ, and especially within the context of the scriptures.</p>
        <p>In Matthew 13, Jesus shared the following parable.</p>
        <Scripture r="Matthew 13 : 3 - 8" />
        <p>Then later in verse 19, Jesus gives the interpretation for the seeds that "fell by the wayside" as described in verse 4.</p>
        <Scripture r="Matthew 13 : 19 - 22" />
        <p>Here we learn from the Savior that one of the dangers we face is to lack a sufficient understanding of his words.</p>
        <p> I pray to our Father that you will be inspired by the Holy Ghost and receive understanding through his presence, and be protected in the moments when the adversary attempts to "catcheth away" the seed of faith sown in your heart, and I do so in the name of Jesus Christ.</p>
        <p>Thank you for visiting, and I hope that what is found here will bring you light and truth!</p>
        <br />
        <p><strong>- Brother Blake</strong></p>
      </Article>
    );
  }
}

export default Home;