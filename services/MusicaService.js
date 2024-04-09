import mongoose from "mongoose"
import musica from "../models/Musica.js"

const Musica = mongoose.model("Musica", musica)

class MusicaService {

    SelectAll() {
        const musicas = Musica.find()
        console.log("Estou no select")
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

    FirstInsert() {
        Musica.find().then(musicas => {
            musicas.forEach(musica => {
                if (musica) {
                    exists = true;
                }
            });
            if (!exists) {
                const worldsMusic = [
                    { nome: 'Warriors', url: "../public/imgs/warriors.jfif", ano: 2014 },
                    { nome: 'Worlds Collide', url: "../public/imgs/worldsCollide.jfif", ano: 2015 },
                    { nome: 'Ignite', url: "../public/imgs/ignite.jfif", ano: 2016 },
                    { nome: 'Legends Never Die', url: "../public/imgs/legendsneverdie.jfif", ano: 2017 },
                    { nome: 'Rise', url: "../public/imgs/rise.jfif", ano: 2018 },
                    { nome: 'Phoenix', url: "../public/imgs/phoeinx.jfif", ano: 2019 },
                    { nome: 'Take Over', url: "../public/imgs/takeover.jfif", ano: 2020 },
                    { nome: 'Burn It All Down', url: "../public/imgs/burnnItAllDown.jfif", ano: 2021 },
                    { nome: "Star Walkin'", url: "../public/imgs/starWalking.jfif", ano: 2022 },
                    { nome: 'GODS', url: "../public/imgs/gods.jfif", ano: 2023 },
                ];
                Musica.insertMany(worldsMusic).then(() => {
                    console.log('Inserção com sucesso');
                }).catch(error => {
                    console.error('Erro na inserção das músicas:', error);
                });
            }
        }).catch(error => {
            console.error('Erro na busca de músicas:', error);
        });
    }
}    

export default new MusicaService()