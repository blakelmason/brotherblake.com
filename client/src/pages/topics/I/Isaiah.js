import React from 'react'

import Template from '../../../components/Template'
import Box from '../../../components/Box'
import Verse from '../../../components/Verse'

const Isaiah = () => {
  return (
    <Template
      image="https://i.imgur.com/hZIHxDb.jpg"
      padding
      position="50% 0%"
      title="Isaiah"
    >
      <p>
        Isaiah lived around 750 BC during the reign of Uzziah, Jotham, Ahaz, and
        Hezekiah in Judah. The Book of Mormon constantly references Isaiah and
        weaves his words into many of its own prophecies. Even the Savior
        himself uses this pattern in 3 Nephi, and follows his own prophecy with
        a commandment to study the words of Isaiah.
      </p>
      <Box
        link={{
          name: '3 Nephi : 1 - 5',
          href:
            'http://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/23.1-5?lang=eng#p1'
        }}
      >
        <Verse number="1">
          And now, behold, I say unto you, that ye ought to search these things.
          Yea, a commandment I give unto you that ye search these things
          diligently; for great are the words of Isaiah.
        </Verse>
        <Verse number="2">
          For surely he spake as touching all things concerning my people which
          are of the house of Israel; therefore it must needs be that he must
          speak also to the Gentiles.
        </Verse>
        <Verse number="3">
          And all things that he spake have been and shall be, even according to
          the words which he spake.
        </Verse>
        <Verse number="4">
          Therefore give heed to my words; write the things which I have told
          you; and according to the time and the will of the Father they shall
          go forth unto the Gentiles.
        </Verse>
        <Verse number="5" last>
          And whosoever will hearken unto my words and repenteth and is
          baptized, the same shall be saved. Search the prophets, for many there
          be that testify of these things.
        </Verse>
      </Box>
    </Template>
  )
}

export default Isaiah
