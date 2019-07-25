const fs = require('fs')

const scripture = ``

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
