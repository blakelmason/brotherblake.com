import React from 'react';
import Article from '../../../../../components/Article';
import Video from '../../../../../components/Video';
import Scripture from '../../../../../components/Scripture';

const Update = () => {
  return (
    <Article
      title="April 21, 2019"
      image="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/57774973_2122646601123669_6081006171613822976_o.jpg?_nc_cat=110&_nc_ht=scontent-lax3-2.xx&oh=9850df85dfa4142bd4f5ff28946dd399&oe=5D340213"
      description="The First Update!"
      url="http://www.brotherblake.com/updates/2019-April-14"
      position="50% 8%"
    >
      <p>Happy Easter! I taught a lesson this week, so another powerpoint.</p>
      <p className="mb-0">
        <a
          href="https://drive.google.com/open?id=1BlJ5UroEODqAKFTUADgijJDC7K1h4K2ZMzJBT2CiQBQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is the entire PowerPoint if you are interested.
        </a>
      </p>
      <br />
      <hr />
      <br />
      <p>
        I have included a link to the video I share at the end. It is from Elder
        Uchtdorf's talk titled{' '}
        <a
          href="https://www.lds.org/general-conference/2015/04/the-gift-of-grace?lang=eng"
          target="_blank"
          rel="noopener noreferrer"
        >
          "The Gift of Grace"
        </a>{' '}
        from April 2015 General Conference.
      </p>
      <Video src="https://www.youtube.com/embed/LkR9TDTX1kQ" />
      <Scripture r="John 3 : 16" />
      <p>Thanks for stopping by!</p>
    </Article>
  );
};

export default Update;
