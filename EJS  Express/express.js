const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Hi i am home!')
})

app.get('/skill', (req, res) => {
    res.send('Hi i am skill!')
  })

  app.get('/contact', (req, res) => {
    res.send('Hi iam  contact!')
  })

  app.get('/blog', (req, res) => {
    res.send('Hi i am blog!')
  })

  app.get('/work', (req, res) => {
    res.send('Hi i am work!')
  })

  app.get('/experience', (req, res) => {
    res.send('hi i am my experience!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})