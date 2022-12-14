const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');
const popularCourses = require('./data/populerCourses.json');

app.get('/popular-courses', (req, res) => {
    res.send(popularCourses)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.filter(course => course.id === id);
    res.send(selectedCourse);


})

app.get('/course-access/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.filter(course => course.id === id);
    res.send(selectedCourse);


})



app.get('/', (req, res) => {
    res.send('School Code is running!')
})

app.listen(port, () => {
    console.log(`School Code app listening on port ${port}`)
})