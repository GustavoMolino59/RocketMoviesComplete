const{Router} = require("express")
const userRoutes = require("./user.routes")
const movieRoutes = require("./movies.routes")
const tagsRoutes = require("./movieTags.routes")
const sessionsRoutes = require("./sessions.routes")
const routes = Router()

routes.use("/users", userRoutes)
routes.use("/movies", movieRoutes)
routes.use("/tags", tagsRoutes)
routes.use("/sessions", sessionsRoutes )
module.exports = routes