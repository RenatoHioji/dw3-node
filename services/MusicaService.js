import mongoose from "mongoose"
import musica from "../models/Musica.js"

const Musica = mongoose.model("Musica", musica)

class MusicaService {
    SelectAll() {
        const musicas = Musica.find()
        return musicas
    }

    Create(nome, cpf, endereco) {
        const novoMusica = new Musica({
            nome : nome,
            cpf : cpf,
            endereco : endereco
        })
        novoMusica.save()
    }

    Delete(id) {
        Musica.findByIdAndDelete(id).then(() => {
            console.log(`Musica com a id: ${id} foi deletado com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }

    SelectOne(id){
        const musica = Musica.findOne({_id : id})
        return musica
    }

    Update(id, nome, cpf, endereco) {
        Musica.findByIdAndUpdate(id, {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        }).then(() => {
            console.log(`Dados do Musica com id: ${id} alterados com sucesso!`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new MusicaService()