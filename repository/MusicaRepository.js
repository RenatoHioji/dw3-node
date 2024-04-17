import Musica from "./../models/Musica.js"

class MusicaRepository{
    async SelectAll(){
        const musicas = await Musica.find()
        console.log("REPOSITORY --")        
        return musicas
    }

    async insertMany(musicas){
        await Musica.insertMany(musicas)
        return this.insertMany
    }
    async findByIdAndDelete(id){
        return await Musica.findByIdAndDelete(id)
    }
}

export default new MusicaRepository()