const express = require("express")
const routes = express.Router()

const movieController = require("../controller/movieController")

routes.get("/",movieController.home)
routes.get("/addmovie",movieController.addMovie)

module.exports= routes