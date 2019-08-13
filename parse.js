const fs = require('fs')

const scripture = `23 Neither shall they defile themselves any more with their idols, nor with their detestable things, nor with any of their transgressions: but I will save them out of all their dwellingplaces, wherein they have sinned, and will cleanse them: so shall they be my people, and I will be their God.

24 And David my servant shall be king over them; and they all shall have one shepherd: they shall also walk in my judgments, and observe my statutes, and do them.

25 And they shall dwell in the land that I have given unto Jacob my servant, wherein your fathers have dwelt; and they shall dwell therein, even they, and their children, and their children’s children for ever: and my servant David shall be their prince for ever.

26 Moreover I will make a covenant of peace with them; it shall be an everlasting covenant with them: and I will place them, and multiply them, and will set my sanctuary in the midst of them for evermore.

27 My tabernacle also shall be with them: yea, I will be their God, and they shall be my people.

28 And the heathen shall know that I the Lord do sanctify Israel, when my sanctuary shall be in the midst of them for evermore.`

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
