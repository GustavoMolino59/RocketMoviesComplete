const knex = require("../database/knex")
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')


class UserAvatarController {

    async update(request, response){
        const user_id = request.user.id;
        const avatarFilename = request.file.filename; //caminho do arquivo e não arquivo em si

        const diskStorage = new DiskStorage();

        const user = await knex('users').where({id: user_id}).first()

        if(!user){
            new AppError("Apenas usuário autenticados podem alterar a foto de perfil")
        }
        if(user.avatar){ //verifica se já existe um avatar e caso exista realiza o delete da foto antiga
            await diskStorage.delete(user.avatar) 
        } 
        const filename = await diskStorage.saveFile(avatarFilename); //Passa o avatarFilename para saveFile que transmite do TMP para o uploads e retorna o nome do arquivo
        user.avatar = filename;

        await knex('users').update(user).where({id: user_id}) //chama o knex e da um update com o user que é um json com todos os dados inclusive o de avatar atualizado

        return response.json(user)
    }
}

module.exports = UserAvatarController;