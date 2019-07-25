import React from 'react'
import { Image } from 'react-bootstrap'

import Template from '../../../components/Template'

const Assyria = () => {
  return (
    <Template title="Assyria">
      <p>
        Assyria was the superpower during the days of Israel, and around 722 BC
        destroyed Israel and took its people captive. Soon after, Assyria turned
        toward Judah and marched on Jerusalem. All of Judah was overrun, except
        for Jerusalem which was saved by divine intervention. Many prophecies
        throughout scripture reference this event, and much of Isaiah's
        prophecies are a warning to the people of the Assyrian threat. The story
        of the siege of Jerusalem can be found in Isaiah 36 - 37. The map below
        shows the empire during the days of Isaiah.
      </p>
      <div className="d-flex justify-content-center">
        <div className="shadow d-inline-block border border-dark">
          <Image src="https://i.imgur.com/3xenoCG.gif" fluid />
        </div>
      </div>
    </Template>
  )
}

export default Assyria
