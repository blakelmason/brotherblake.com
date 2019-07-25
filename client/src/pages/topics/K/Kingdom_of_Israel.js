import React from 'react'
import { Image } from 'react-bootstrap'

import Template from '../../../components/Template'

const Kingdom_of_Israel = () => {
  return (
    <Template title="Kingdom of Israel">
      <p>
        We need to be able to hold at least an overview of the history of Israel
        in our mind in order to understand the scriptures. The chart below gives
        a clear picture of the kings of Israel, and is what I use as a visual
        representation to help me keep Israel's history organized in my mind.
      </p>
      <div
        className="d-flex justify-content-center pb-5"
        style={{ paddingTop: 32 }}
      >
        <div className="text-center shadow" style={{ maxWidth: 600 }}>
          <Image src="https://i.imgur.com/9GoYrCX.png" fluid />
        </div>
      </div>
      <p>
        As we see, the kingdom of Israel was originally united at the top of the
        chart, but after Solomon it split into 2 entities: Judah and Israel. The
        context of how the term "Israel" is used can sometimes mean the entire
        nation, or the people who are separate from the kingdom of Judah. Often
        Israel is called the kingdom of Ephraim in the scriptures, or it is
        referred to as the north, or the northern kingdom. This is done in order
        to clarify that the separate kingdom is being mentioned and not the
        nation as a whole. It was referred to as Ephraim because Israel was
        generally ruled by someone from the tribe of Ephraim, and it was
        referred to as the north because it was located north of Judah. Also of
        importance are the capital cities, Samaria and Jerusalem. Sometimes
        prophets use the name of the capital to refer to the individual country.
        See the map below for a visual reference.
      </p>
      <div
        className="d-flex justify-content-center pb-5"
        style={{ paddingTop: 32 }}
      >
        <div
          className="text-center border border-dark shadow"
          style={{ maxWidth: 600 }}
        >
          <Image src="https://i.imgur.com/mvZf3RY.png" fluid />
        </div>
      </div>
      <p>
        One last thing to mention is that every single king of Israel was evil.
        In Judah most kings were also evil, but there were some good ones.
        Because so many kings were evil, the people were very corrupt most of
        the time.
      </p>
    </Template>
  )
}

export default Kingdom_of_Israel
