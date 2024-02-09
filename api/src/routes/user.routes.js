const{Router} = require("express")
const multer = require('multer')
const uploadConfig = require('../configs/upload')
const UserController = require("../controller/UserController")
const ensureAuthentication = require("../middleware/ensureAuthentication")
const UserAvatarController = require('../controller/UsersAvatarController');


const usersRoute = Router();
const userController = new UserController()
const userAvatarContoller = new UserAvatarController()
const upload = multer(uploadConfig.MULTER)



usersRoute.post("/", userController.create)
usersRoute.put("/", ensureAuthentication,  userController.update) //Antes de chamar passa pelo middleware, que verifica o token e caso seja verdadeiro insere o ID do usuário na request
usersRoute.patch("/avatar", ensureAuthentication,upload.single("avatar"), userAvatarContoller.update)

module.exports = usersRoute;



