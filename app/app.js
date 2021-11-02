const express = require("express")
const mongoose = require("mongoose")
const app = express()
const db = require("./db")

const schema = new mongoose.Schema({
    name:String
})

const User =  mongoose.model("user",schema)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
console.log('this is new')
db.connect()

app.get("/",(req, res)=>{
     res.sendFile(__dirname+"/index.html")
})

app.post("/post",(req,res)=>{
    console.log(req.body)

    const user = new User(req.body)
    user.save()
    res.sendFile(__dirname+"/result.html")
    

})



app.listen(3003,()=>{
    console.log("this is main sever running............ 3003")
})