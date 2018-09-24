const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/todos',{useNewUrlParser:true}).then(function() {
  console.log("Connected to database ...");
})

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.get('/',(req,res)=>{
  res.end('index')
})
app.post('/register',(req,res)=>{
  console.log(req.body)
  res.json(req.body)
})

app.listen('3000',function(err){
  if(err) throw err;
  console.log("Running on port 3000 ...")
})
