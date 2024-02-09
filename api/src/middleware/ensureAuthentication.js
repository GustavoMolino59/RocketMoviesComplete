const AppError = require('../utils/AppError')

//Importando o verify da biblioteca e as configuraões
const { verify } = require("jsonwebtoken")
const authConfig = require('../configs/auth')


function ensureAuthentication(request, response, next){
    const authHeader = request.headers.authorization; // pegando o header da request que diz respeito a autorização

    if(!authHeader){
        throw new AppError("JT token não informado")
    }

    const[, token] = authHeader.split(" ")

    try{
        const{sub: user_id} = verify(token, authConfig.jwt.secret) //verify verifica o token e caso seja real retorna o payload do token, no qual pegamos o user_id

        request.user = {
            id:Number(user_id), //Inserimos o user_id dentro do request que ira para um controller
        };
        return next();
    }catch{
        new AppError("JT token inválido")
    }
}

module.exports = ensureAuthentication;