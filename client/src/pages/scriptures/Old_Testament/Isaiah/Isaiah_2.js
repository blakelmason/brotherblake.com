import React from 'react'
// import { Link } from 'react-router-dom'

import Template from '../../../../components/Template'
import Box from '../../../../components/Box'
// import { T, D } from '../../../../components/Tooltips'
import Verse from '../../../../components/Verse'
import Link2 from '../../../../components/Link2'
// import Image2 from '../../../../components/Image2'

const Isaiah_2 = () => {
  return (
    <Template
      title="Isaiah 2"
      link="http://www.churchofjesuschrist.org/study/scriptures/ot/isa/2?lang=eng"
    >
      <Box>
        <Verse number="1">
          The word that Isaiah the son of Amoz saw concerning Judah and
          Jerusalem.
        </Verse>
        <Verse number="2">
          And it shall come to pass in the last days, that the mountain of the
          Lord’s house shall be established in the top of the mountains, and
          shall be exalted above the hills; and all nations shall flow unto it.
        </Verse>
        <Verse number="3" last>
          And many people shall go and say, Come ye, and let us go up to the
          mountain of the Lord, to the house of the God of Jacob; and he will
          teach us of his ways, and we will walk in his paths: for out of Zion
          shall go forth the law, and the word of the Lord from Jerusalem.
        </Verse>
      </Box>
      <p>
        Many church leaders and teachers have taught that this prophecy was and
        is being fulfilled by the temples we build, and especially the Salt Lake
        City temple. This idea has been emphasized so much that most church
        members seem unaware of the actual future fulfillment of this prophecy.
        It is true that the temples of the Church of Jesus Christ of Latter-day
        Saints are <em>parallels</em> to this prophecy, but their construction
        is not the <em>fulfillment</em>. Now, it is good to "liken" Isaiah's
        prophecies to ourselves, but we should first seek an understanding of
        what Isaiah actually means in order to correctly "liken" them. Without
        this understanding, the scriptures become confusing and the Spirit
        becomes constricted. The Spirit can only testify of truth, and if we try
        to shove square scriptural fulfillments into circular prophecies, His
        influence will be stifled.
      </p>
      <p>
        The Church even made a movie called{' '}
        <Link2 href="https://www.youtube.com/watch?v=WkxbMzmWFJQ">
          Mountain of the Lord
        </Link2>{' '}
        about the Salt Lake Temple, and in the{' '}
        <Link2 href="https://www.churchofjesuschrist.org/temples/details/salt-lake-temple/prayer/1893-04-06">
          dedicatory prayer
        </Link2>{' '}
        Wilford Woodruff declared that the building of the temples is the
        fulfillment of Isaiah's prophecy. This is not wrong, in fact it is good
        to try and find parallels in our life from scripture, but it is not
        entirely true either. The true fulfillment of this prophecy has not yet
        occurred, and will take place after Jesus Christ comes again and
        personally reigns from Jerusalem. I found an excellent article titled{' '}
        <Link2 href="https://rsc.byu.edu/archived/ascending-mountain-lord-temple-praise-and-worship-old-testament/great-jerusalem-temple">
          The Great Jerusalem Temple Prophecy: Latter-day Context and Likening
          unto Us
        </Link2>{' '}
        which provides further explanation.
      </p>
      <p>
        Verse 2 mentions how the Lord's house will at the top of mountains and
        above hills. Zechariah explains how this happens.
      </p>
      <Box
        link={{
          href:
            'http://www.churchofjesuschrist.org/study/scriptures/ot/zech/14.9-10?lang=eng',
          name: 'Zechariah 14 : 9 - 10'
        }}
      >
        <Verse number="9">
          And the Lord shall be king over all the earth: in that day shall there
          be one Lord, and his name one.
        </Verse>
        <Verse number="10" last>
          All the land shall be turned as a plain from Geba to Rimmon south of
          Jerusalem: and it shall be lifted up, and inhabited in her place, from
          Benjamin’s gate unto the place of the first gate, unto the corner
          gate, and from the tower of Hananeel unto the king’s winepresses.
        </Verse>
      </Box>
      <p />
      <p>
        This is a prophecy about how the land will physically change and
        Jerusalem will be physically lifted above the area around it. It is
        symbolic of the Lord's status: because he was lifted up on the cross, he
        will be lifted and exalted above all men. Because he was judged of the
        world, all nations will flow to him in righteous judgement and
        adoration. His terrible condescension will be turned into a glorious
        ascension. The Savior taught this to the people in the Book of Mormon.
      </p>
      <Box
        link={{
          href:
            'http://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/27.13-16?lang=eng',
          name: '3 Nephi 27 : 13 - 16'
        }}
      >
        <Verse number="13">
          Behold I have given unto you my gospel, and this is the gospel which I
          have given unto you—that I came into the world to do the will of my
          Father, because my Father sent me.
        </Verse>
        <Verse number="14">
          And my Father sent me that I might be lifted up upon the cross; and
          after that I had been lifted up upon the cross, that I might draw all
          men unto me, that as I have been lifted up by men even so should men
          be lifted up by the Father, to stand before me, to be judged of their
          works, whether they be good or whether they be evil—
        </Verse>
        <Verse number="15">
          And for this cause have I been lifted up; therefore, according to the
          power of the Father I will draw all men unto me, that they may be
          judged according to their works.
        </Verse>
        <Verse number="16" last>
          And it shall come to pass, that whoso repenteth and is baptized in my
          name shall be filled; and if he endureth to the end, behold, him will
          I hold guiltless before my Father at that day when I shall stand to
          judge the world.
        </Verse>
      </Box>
      <p>
        See the rest of{' '}
        <Link2 href="http://www.churchofjesuschrist.org/study/scriptures/ot/zech/14?lang=eng">
          Zechariah 14
        </Link2>{' '}
        for more details.
      </p>
      <p>
        Isaiah then continues and teaches what will happen, and pleads for the
        house of Jacob, or all of the Lord's people to walk in His light and to
        follow Him.
      </p>
      <Box>
        <Verse number="4">
          And he shall judge among the nations, and shall rebuke many people:
          and they shall beat their swords into plowshares, and their spears
          into pruninghooks: nation shall not lift up sword against nation,
          neither shall they learn war any more.
        </Verse>
        <Verse number="5" last>
          O house of Jacob, come ye, and let us walk in the light of the Lord.
        </Verse>
      </Box>
    </Template>
  )
}

export default Isaiah_2
