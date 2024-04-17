import MusicaRepository from "./../repository/MusicaRepository.js"

var exists = false

class MusicaService {
    async SelectAll() {
        const musicas = await MusicaRepository.SelectAll();
        console.log("SERVICE- " , musicas)
        return musicas
    }

    async Delete(id) {
        await MusicaRepository.findByIdAndDelete(id)
    }
   /*
    Create(nome, cpf, endereco) {
        const novoMusica = new Musica({
            nome : nome,
            cpf : cpf,
            endereco : endereco
        })
        novoMusica.save()
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
    }*/ 

    FirstInsert() {
        MusicaRepository.SelectAll().then(musicas => {
            musicas.forEach(musica => {
                if (musica) {
                    exists = true;
                }
            });
            if (!exists) {
                const worldsMusic = [
                    { nome: 'Warriors', url: "imgs/warriors.jfif", ano: 2014 },
                    { nome: 'Worlds Collide', url: "imgs/worldsCollide.jfif", ano: 2015 },
                    { nome: 'Ignite', url: "imgs/ignite.jfif", ano: 2016 },
                    { nome: 'Legends Never Die', url: "imgs/legendsneverdie.jfif", ano: 2017 },
                    { nome: 'Rise', url: "imgs/rise.jfif", ano: 2018 },
                    { nome: 'Phoenix', url: "imgs/phoenix.jfif", ano: 2019 },
                    { nome: 'Take Over', url: "imgs/takeover.jfif", ano: 2020 },
                    { nome: 'Burn It All Down', url: "imgs/burnItAllDown.jfif", ano: 2021 },
                    { nome: "Star Walkin'", url: "imgs/starWalking.jfif", ano: 2022 },
                    { nome: 'GODS', url: "imgs/gods.jfif", ano: 2023 },
                ];
                MusicaRepository.insertMany(worldsMusic).then(() => {
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