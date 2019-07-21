const express = require('express')
const server = express()
const port = process.env.PORT || 3001

process.env.NODE_ENV === 'production' &&
  server.use(express.static('client/build'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

server.listen(port, () => console.log(`Server listening on port ${port}.`))
