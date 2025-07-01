const movieTbl = require("../model/movieTbl")
const db = require("../config/db")

const home = (req,res)=>{

    movieTbl.find({})
    .then((data)=>{

        res.render("home",{
            data
        })
        return false
    })
    .catch((err)=>{
        console.log(err)
        return false
    })
}
const addMovie = (req,res)=>{
    res.render("form")
}
const insertMovie = (req,res)=>{

    const {title,description,rating,genre,date} = req.body
    let image = req.file.path
    movieTbl.create({
        title,
        description,
        rating,
        genre,
        date,
        image
    })
    .then((data)=>{
        console.log("data added successfully")
        return false
    })
    .catch((err)=>{
        console.log(err)
        return false
    })

    res.redirect("/")
}

module.exports = {home,addMovie,insertMovie}