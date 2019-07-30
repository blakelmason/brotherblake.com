import React from 'react'

import Template from '../../../../components/Template'
import Box from '../../../../components/Box'
import Verse from '../../../../components/Verse'
import Link2 from '../../../../components/Link2'
import { D } from '../../../../components/Tooltips'

const Alma_59 = () => {
  return (
    <Template
      title="Alma 59"
      link="http://www.churchofjesuschrist.org/study/scriptures/bofm/alma/59"
    >
      <Box>
        <Verse number="13" last>
          And it came to pass that Moroni was angry with the government, because
          of their indifference concerning the freedom of their country.
        </Verse>
      </Box>
      <p>
        I have been taught that anger is always bad, no exceptions. In this
        verse Moroni is angry, and I feel it is justified. Therefore, there are
        situations in which anger is justified.
      </p>
      <p>
        I found an{' '}
        <Link2 href="http://webstersdictionary1828.com/Dictionary/anger">
          interesting definition in the 1828 dictionary
        </Link2>{' '}
        that supports this.
      </p>
      <Box>
        <p>
          <strong>ANGER</strong>
        </p>
        <p>
          A violent passion of the mind excited by a real or supposed injury;
          usually accompanied with a propensity to take vengeance, or to obtain
          satisfaction from the offending party.{' '}
          <u>This passion however varies in degrees of violence, and in</u>{' '}
          <span className="definition">ingenuous</span>{' '}
          <D>
            Noble; generous; as an ingenuous ardor or zeal; ingenuous
            detestation of falsehood.
          </D>{' '}
          <u>
            minds, may be attended only with a desire to reprove or chide the
            offender
          </u>
          .
        </p>
      </Box>
      <p>
        This definition justifies anger with proper restraint and judgement.
      </p>
    </Template>
  )
}

export default Alma_59
