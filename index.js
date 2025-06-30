const express  = require("express")

const port = 8000
const app = express()

app.set("view engine" , "ejs")
app.use(express.json())
app.use(express.urlencoded())
app.use("/",require("./router/index"))





app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log("server is running at port = " + port)
})