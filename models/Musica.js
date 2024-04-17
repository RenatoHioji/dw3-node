import mongoose from "mongoose"

const musica = new mongoose.Schema({
    nome: String,
    url: String,
    ano: Number
})
const Musica = mongoose.model("Musicas", musica)

export default Musica