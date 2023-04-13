const express = require('express');
const app = express();
const multer = require("multer");
const upload = multer();
const port = 3000;
const path = require('path');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');


//write data to page
app.get('/',((req, res) => {
    res.render("blog");
}));


const arrayBlog = [];

app.post('/blog/list',upload.none(), (req,res)=>{
    if (req.body.blogName) {
        const user = {
            content: req.body.blogName,
        }
        arrayBlog.push(user);
        console.log(arrayBlog);
        res.render("bloglist", {data: arrayBlog});
    } else {
        res.render("error");
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



module.exports = app;