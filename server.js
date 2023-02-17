const express = require('express')
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyParser=require("body-parser");
const path=require('path');

const app = express()

dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080

//log requests
app.use(morgan('tiny'));

//parse request
app.use(bodyParser.urlencoded({extended:false}));


//set view engine
app.set("view engine","ejs");

//load assets
app.use('/css/style.css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))




app.get('/', function (req, res) {
  res.send('Crud Application')
})

app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${3000}`)});