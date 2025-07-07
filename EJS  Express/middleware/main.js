const express = require('express')
const app = express()
const port = 3000



app.use((req, res, next) => {
    console.log('LOGGED')
    next()
})

app.use((req, res, next) => {
    console.log('LOGGED')
    next()
})


app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(port, () => {
    console.log(`Server http://localhost:${port}/`)
})