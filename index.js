const express  = require("express")
const movieTbl = require("./model/movieTbl")
const db = require("./config/db")
const path = require("path")
const port = 8000
const app = express()

app.set("view engine" , "ejs")
app.use(express.json())
app.use(express.urlencoded())
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use("/",require("./router/index"))




app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log("server is running at port = " + port)
})