const fs = require('fs')

const scripture = `16 But this is that which was spoken by the prophet Joel;

17 And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh: and your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams:

18 And on my servants and on my handmaidens I will pour out in those days of my Spirit; and they shall prophesy:

19 And I will shew wonders in heaven above, and signs in the earth beneath; blood, and fire, and vapour of smoke:

20 The sun shall be turned into darkness, and the moon into blood, before that great and notable day of the Lord come:

21 And it shall come to pass, that whosoever shall call on the name of the Lord shall be saved.`

const arr = scripture.split(/\n/g)

arr.forEach((item, index) => item === '' && arr.splice(index, 1))

const htmlArr = []

arr.forEach((item, index, array) => {
  const spaceIndex = item.indexOf(' ')
  const verse = item.substr(0, spaceIndex)
  const shortened = item.substr(spaceIndex)
  let htmlVerse
  index === array.length - 1
    ? (htmlVerse = `<Verse number="${verse}" last>${shortened}</Verse>`)
    : (htmlVerse = `<Verse number="${verse}">${shortened}</Verse>`)
  htmlArr.push(htmlVerse)
})

const versesString = htmlArr.join('')

fs.writeFileSync('parsed.html', versesString)
