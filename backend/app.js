const express = require('express')

const app = express()

const port = 9000


app.get('/', (req, res) => {
  res.send(`<h1>Hello World! It's Codecool!e</h1>`)
})

/*app.get('/backend', (req, res) => {
  res.send(`data.json`)
})*/

/*app.get('/api/students/1', (req, res) => {
  res.json('data.json')
})*/

app.use('/backend', express.static('backend'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})