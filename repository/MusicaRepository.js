import Musica from "./../models/Musica.js"

class MusicaRepository{
    async SelectAll(){
        const musicas = await Musica.find()
        return musicas
    }

    async insertMany(musicas){
        await Musica.insertMany(musicas)
        return this.insertMany
    }
    async findByIdAndDelete(id){
        return await Musica.findByIdAndDelete(id)
    }
    async Create(nome, url, ano){

        const musica = new Musica({
            nome: nome,
            url: url,
            ano: ano
        })
        return await Musica.create(musica)
    }
    async Update(id, nome, url, ano){
        if(url == ""){
            await Musica.findByIdAndUpdate(id, {
                nome: nome,
                ano: ano
            }, { new: true })
            return 
        }else{
            await Musica.findByIdAndUpdate(id, {
                nome: nome,
                url: `imgs/${url}`,
                ano: ano
            }, { new: true })
            return 
        }
    }
    async FindById(id){
        return await Musica.findById(id)
    }
}

export default new MusicaRepository()