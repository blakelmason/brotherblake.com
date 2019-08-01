import React from 'react'

import Template from '../../../../components/Template'
import Box from '../../../../components/Box'
import Verse from '../../../../components/Verse'
import Link2 from '../../../../components/Link2'

const Acts_2 = () => {
  return (
    <Template
      title="Acts 2"
      link="http://www.churchofjesuschrist.org/study/scriptures/nt/acts/2?lang=eng"
    >
      <Box>
        <Verse number="16">
          But this is that which was spoken by the prophet Joel;
        </Verse>
        <Verse number="17">
          And it shall come to pass in the last days, saith God, I will pour out
          of my Spirit upon all flesh: and your sons and your daughters shall
          prophesy, and your young men shall see visions, and your old men shall
          dream dreams:
        </Verse>
        <Verse number="18">
          And on my servants and on my handmaidens I will pour out in those days
          of my Spirit; and they shall prophesy:
        </Verse>
        <Verse number="19">
          And I will shew wonders in heaven above, and signs in the earth
          beneath; blood, and fire, and vapour of smoke:
        </Verse>
        <Verse number="20">
          The sun shall be turned into darkness, and the moon into blood, before
          that great and notable day of the Lord come:
        </Verse>
        <Verse number="21" last>
          And it shall come to pass, that whosoever shall call on the name of
          the Lord shall be saved.
        </Verse>
      </Box>
      <p>
        I find it interesting how Peter applies this prophecy to the people when
        it specifically states that it will take place in "the last days". This
        is a good example of "likening" (
        <Link2
          href="http://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/19.23-24?lang=eng#p23"
          nowrap
        >
          1 Nephi 19 : 23 - 24
        </Link2>
        ) the words of the prophets to the current time period.
      </p>
    </Template>
  )
}

export default Acts_2
