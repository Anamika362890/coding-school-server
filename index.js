const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/', (req, res) => {
    res.send('School Code is running!')
})

app.listen(port, () => {
    console.log(`School Code app listening on port ${port}`)
})