import express from "express";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/",(req, res)=>{
    res.render('index.ejs');
})

app.get("/students",(req, res)=>{
    res.render('students_drop_out.ejs');
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
})