const knex = require("../database/knex")
const {hash, compare} = require('bcryptjs')
const AppError = require("../utils/AppError")
const validator = require("validator")
class UserController{

    async create(request, response){
        const {name, email, password} = request.body;
        
        const checkUserExists = await knex("users").where({email})
        
        
        console.log(checkUserExists)
        //Verificar se o usuário já existe
        if(checkUserExists.length > 0){
            throw new AppError("Este email já existe")
        }
        emailValidation(email)
        //Validar senha
        passwordValidation(password)
        
        
       
        
        //criptografar senha e inserir
        const hashedPassword = await hash(password, 8);
        await knex("users").insert({
            name,
            email,
            password:hashedPassword
        })
        return response.status(201).json()
    }

    async update(request, response){
        const { name, email, password, old_password} = request.body;
        console.log(request.user)
        const id = request.user.id;
        //Validar dados recebidos
        if( !old_password){ 
            throw new AppError("Devem ser informado a sua senha do usuário")
        }
        
        //Verificar email do usuário - autenticacao
        const [user] = await knex("users").where({id})
        
        if(!user){
            throw new AppError("Usuário não encontrado")
        }

        //Validar password -autenticacao
        const checkPassword = await compare(old_password, user.password)
        
        
        if(!checkPassword){
            throw new AppError("senha inválida")
        }

        //Validar nova senha
        passwordValidation(password)

        //validar novo email
        emailValidation(email)
        //Realizar atualização do cadastro

        if(password){
            const newPassword = await hash(password, 8)
            await knex("users").update({password: newPassword}).where({id:user.id})
        }
        const udpatedMail = (email !== "" && email !== null && email !== undefined) ? email : user.email
        const udpatedName = (name !== "" && name !== null && name !== undefined) ? name : user.name
        await knex("users").update({email:udpatedMail}).where({id:user.id})
        await knex("users").update({name:udpatedName}).where({id:user.id})
        await knex("users").update({updated_at : knex.fn.now()}).where({id:user.id})
        return response.json()
    }
}

function emailValidation(email){
    if(email){
        const isEmail =  validator.isEmail(email)
        //Verificar email válido
        if(!isEmail){
            throw new AppError("Digite um email válido")
        }
    }
}

function passwordValidation(password){
    if(password){
        const hasSpecialChar = /[^a-zA-Z0-9 ]/.test(password);
        if(password.length  < 8){
            throw new AppError("Senha muito curta")
        }
        //Verificar caracter especial
        if(!hasSpecialChar){
            throw new AppError("Insira pelo menos 1 caracter especial")
        }
    }
}
module.exports = UserController;