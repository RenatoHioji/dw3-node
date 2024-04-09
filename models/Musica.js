import mongoose from "mongoose"

const musica = new mongoose.Schema({
    nome: String,
    url: String,
    ano: Number
})

export default musica