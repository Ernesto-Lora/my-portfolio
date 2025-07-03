import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Required if using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));


// routes
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

app.get("/fintech_ingestion",(req, res)=>{
    res.render('fintech_ingestion.ejs');
})

app.get("/glue_pipeline",(req, res)=>{
    res.render('glue_pipeline.ejs');
})

app.get("/traffic_disruptions",(req, res)=>{
    res.render('2kinesis_rutas.ejs');
})

app.get("/data_lake1",(req, res)=>{
    res.render('3data_lake.ejs');
})

app.get("/fraud_detection",(req, res)=>{
    res.render('5ml_fraud.ejs');
})

app.get("/personalization",(req, res)=>{
    res.render('6personalization.ejs');
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