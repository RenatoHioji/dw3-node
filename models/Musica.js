import mongoose from "mongoose"

const musica = new mongoose.Schema({
    nome: String,
    url: String,
    year: int
})

export default musica