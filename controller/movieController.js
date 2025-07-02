const movieTbl = require("../model/movieTbl")
const db = require("../config/db")
const fs = require("fs")

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

    const {title,description,rating,genre,date,director} = req.body
    let image = req.file.path
    movieTbl.create({
        title,
        description,
        rating,
        director,
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


const deleteMovie = async (req,res)=>{
    const id = req.params.id
    try {
        
        const data = await movieTbl.findByIdAndDelete(id)
        res.redirect("/")
    } catch (error) {
        console.log(err)
    }


}
const updateMovie = async (req,res)=>{
    const id = req.params.id
    try {
        
        const data = await movieTbl.findById(id)

      return res.render("update",{
        data
      })
    } catch (error) {
        console.log(err)
    }


}


const update = async (req,res)=>{  
      const {id,title,description,rating,genre,date,director} = req.body

   try {
        const movie = await movieTbl.findById(id);

        if (!movie) {
            console.log("❌ Movie not found");
            return res.redirect("/");
        }

        const updateData = {
            title,
            description,
            rating,
            director,
            genre,
            date
        };

        if (req.file) {
            // Delete old image if it exists
            if (movie.image && fs.existsSync(movie.image)) {
                fs.unlinkSync(movie.image);
            }

            updateData.image = req.file.path;
        }

        await movieTbl.findByIdAndUpdate(id, updateData);
        console.log("✅ Movie updated successfully");

        res.redirect("/");

    } catch (err) {
        console.log("❌ Error while updating:", err);
        res.status(500).send("Update failed");
    }
        
   
}
module.exports = {home,addMovie,insertMovie,deleteMovie,updateMovie,update}