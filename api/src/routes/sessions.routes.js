const { Router} = require("express");

const SessionController = require("../controller/SessionsController")

const sessionRoute = Router();
const sessionController = new SessionController();


sessionRoute.post("/", sessionController.create)

module.exports = sessionRoute;