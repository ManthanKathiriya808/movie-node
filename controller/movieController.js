

const home = (req,res)=>{
    res.render("home")
}
const addMovie = (req,res)=>{
    res.render("form")
}

module.exports = {home,addMovie}