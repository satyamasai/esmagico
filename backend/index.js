const express = require('express');
const app= express();

const cors= require('cors');
const { connection } = require('./Config/db');
const { userController } = require('./Routes/User.route');
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{

    res.send("Welcome to ecmagico app")

})

app.use("/",userController)



app.listen(8080,async()=>{

try{
  await connection
  console.log("Database connected...");
  console.log("LISTENING ON PORT 8080...");
  
}catch(err){
    console.log("!! Database connection failed...");
    console.log(err)
}

})
