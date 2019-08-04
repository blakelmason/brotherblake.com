import React from 'react'

import Template from '../../../../components/Template'
import Box from '../../../../components/Box'
import Verse from '../../../../components/Verse'
import Link2 from '../../../../components/Link2'

const _1_Corinthians_10 = () => {
  return (
    <Template
      title="1 Corinthians 10"
      link="http://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/10?lang=eng"
    >
      <Box>
        <Verse number="4" last>
          And did all drink the same spiritual drink: for they drank of that
          spiritual Rock that followed them: and that Rock was Christ.
        </Verse>
      </Box>
      <p>
        See{' '}
        <Link2 href="https://www.biblicalarchaeology.org/daily/biblical-topics/new-testament/water-from-a-walking-rock/">
          Water from a Walking Rock
        </Link2>
        .
      </p>
    </Template>
  )
}

export default _1_Corinthians_10
