const express = require("express")
const routes = express.Router()
const images = require("../multer/images")
const movieController = require("../controller/movieController")

routes.get("/",movieController.home)
routes.get("/addmovie",movieController.addMovie)
routes.post("/insertmovie",images,movieController.insertMovie)

module.exports= routes