const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  rating:{
    type:String,
    required:true
  },
  director:{
    type:String,
    required:true
  },
  genre:{
    type:[String],
    required:true
  },
  date:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },

})


const movieTbl = mongoose.model("movies",movieSchema)

module.exports = movieTbl