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

app.get("/cifar10",(req, res)=>{
    res.render('cifar10.ejs');
})

app.get("/real_time_inventory",(req, res)=>{
    res.render('real_time_inventory.ejs');
})

app.get("/glue_pipeline",(req, res)=>{
    res.render('glue_pipeline.ejs');
})

app.get("/skills",(req, res)=>{
    res.render('skills.ejs');
})

app.get("/contact",(req, res)=>{
    res.render('contact.ejs');
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
})