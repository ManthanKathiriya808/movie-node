const express = require("express")
const routes = express.Router()
const images = require("../multer/images")
const movieController = require("../controller/movieController")

routes.get("/",movieController.home)
routes.get("/addmovie",movieController.addMovie)
routes.post("/insertmovie",images,movieController.insertMovie)
routes.get("/deletemovie/:id",movieController.deleteMovie)
routes.get("/updatemovie/:id",movieController.updateMovie)
routes.post("/update",images,movieController.update)

module.exports= routes