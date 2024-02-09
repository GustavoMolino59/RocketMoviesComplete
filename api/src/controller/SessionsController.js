const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")

// Importando a configuração do token JWT e o método sign da biblioteca
const  authConfig = require("../configs/auth") 
const {sign} = require("jsonwebtoken")

class SessionController{

    async create(request, response){
        const {email, password} = request.body 

        const user = await knex("users").where({email}).first()
        
        if(!user){
            throw new AppError("Email e/ou senha incorretos", 401) //email incorreto
        }

        const matchPassword = await compare(password, user.password);
        
        if(!matchPassword){
            throw new AppError("Email e/ou senha incorretos", 401) //Senha incorreta
        }

        //gerando o token
        const {secret, expiresIn} = authConfig.jwt //pegando as configs
        const token = sign({}, secret, {
            subject: String(user.id), //Campo que indentifica a entidade associada ao token, no caso, id do usuario
            expiresIn
        })

        return response.json({user, token}) 
    }
}
module.exports = SessionController;