const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Coding School is running!!!!!')
})

app.listen(port, () => {
    console.log(` Coding School listening on port ${port}`)
})