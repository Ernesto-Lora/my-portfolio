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

app.get("/air-quality",(req, res)=>{
    res.render('air_quality_calibration.ejs');
})

app.get("/credit_card",(req, res)=>{
    res.render('credit_card.ejs');
})

app.get("/spam_detection",(req, res)=>{
    res.render('spam.ejs');
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
})