const{Router} = require("express")
const TagsController = require("../controller/TagsController")
const ensureAuthentication = require('../middleware/ensureAuthentication')

const tagsRoutes = Router();
const tagsController = new TagsController()

tagsRoutes.get("/", ensureAuthentication, tagsController.index)
module.exports = tagsRoutes;