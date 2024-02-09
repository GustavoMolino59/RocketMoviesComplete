const{Router} = require("express")
const MoviesController = require("../controller/MoviesController")
const ensureAuthentication = require('../middleware/ensureAuthentication')

const moviesRote = Router();
const movieController = new MoviesController()

moviesRote.use(ensureAuthentication)
moviesRote.post("/", movieController.create)
moviesRote.get("/", movieController.index)
moviesRote.get("/:id", movieController.show)
moviesRote.delete("/:id", movieController.delete)
module.exports = moviesRote;
