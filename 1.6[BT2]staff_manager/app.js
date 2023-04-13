const createError = require('http-errors');
const express = require('express');
const multer = require("multer");
const upload = multer();
const path = require('path');


const indexRouter = require('./router/index');
const usersRouter = require('./router/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("create");
})

incrementID = 0;
studentList= []
app.post('/views', upload.none(), (req, res) => {
    if (req.body.studentName) {
        const student = {
            name: req.body.studentName,
            studentId: incrementID++
        }
        studentList.push(student)
        res.render("views",{data:studentList})
    }
})

app.get('/delete', (req,res)=>{
    console.log(typeof req.query.id);
    studentList.forEach((element,index) =>{
        if (element.studentId === Number(req.query.id)){
            studentList.splice(index,1)
        }
    })
    console.log(studentList);
    res.render("views",{data:studentList})
})


app.listen(5000, () => {
        console.log('server is listening on port 5000')
    }
)


module.exports = app;