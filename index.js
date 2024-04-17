import express from "express" 
import mongoose from "mongoose"
import MusicaController from "./controllers/MusicaController.js"
import firstInsert from "./services/MusicaService.js"
const app = express() 
mongoose.connect("mongodb://localhost:27017/musica")



app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use("/", MusicaController)
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
        firstInsert.FirstInsert()
    }
})