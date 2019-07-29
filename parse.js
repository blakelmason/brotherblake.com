const fs = require('fs')

const scripture = `18 And the idols he shall utterly abolish.

19 And they shall go into the holes of the rocks, and into the caves of the earth, for fear of the Lord, and for the glory of his majesty, when he ariseth to shake terribly the earth.

20 In that day a man shall cast his idols of silver, and his idols of gold, which they made each one for himself to worship, to the moles and to the bats;

21 To go into the clefts of the rocks, and into the tops of the ragged rocks, for fear of the Lord, and for the glory of his majesty, when he ariseth to shake terribly the earth.

22 Cease ye from man, whose breath is in his nostrils: for wherein is he to be accounted of?`

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
