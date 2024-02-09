const knex = require("../database/knex")
const AppError = require("../utils/AppError")
class MoviesController{
    async create(request, response){
        const {title, description, tags,  rating} = request.body;
        const user_id = request.user.id

        
        if(rating < 0 || rating > 5){
            throw new AppError("Tag fora do padrão")
        }
        const[MoviesNotesId] = await knex("movies_notes").insert({
            title,
            description,
            rating,
            user_id
        })
    

        const tagInsert = tags.map(title =>{
            return{
                note_id: MoviesNotesId,
                user_id,
                title
            }
        })

        await knex("movies_tags").insert(tagInsert);

        return response.json()
    }
    async show(request, response){
        const{id} = request.params

        const note = await knex("movies_notes").where({id}).first()
        const tags = await knex("movies_tags").where({note_id: id}).orderBy("title")
        return response.json({note, tags})
    }
    async delete(request, response){
        const{id} = request.params

        await knex("movies_notes").where({id}).delete()
        return response.json()
    }
    async index(request,response){
        const{ title,tags} = request.query
        const user_id = request.user.id
        let movies_notes;
        console.log(tags)
        if(tags){
            const filterTags = tags.split(",").map(tag =>tag.trim())
            console.log(filterTags)
            movies_notes = await knex("movies_tags")
            .select(["movies_notes.id", "movies_notes.title", "movies_notes.description", "movies_notes.rating", "movies_notes.user_id"])
            .where("movies_notes.user_id", user_id)
            .whereLike("movies_notes.title", `%${title}%`)
            .whereIn("movies_tags.title", filterTags )
            .innerJoin("movies_notes", "movies_notes.id", "movies_tags.note_id")
            .orderBy("movies_tags.title")
        }else{
            movies_notes = await knex("movies_notes").where({user_id}).whereLike("title", `%${title}%`).orderBy("created_at", 'desc')
        }
        
        const userTags = await knex("movies_tags").where({user_id});
        const notesWithTags = movies_notes.map(note =>{
            const noteTags = userTags.filter(tag => tag.note_id === note.id);
            return{
                ...note,
                tags: noteTags
            }
        })
        return response.json(notesWithTags)
    }
}


module.exports = MoviesController