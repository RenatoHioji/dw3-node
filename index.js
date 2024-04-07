import express from "express" 
import mongoose from "mongoose"
import MusicaController from "./controllers/MusicaController.js"

const app = express() 



app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use("/", MusicaController)
mongoose.connect("mongodb://localhost:27017/musica")



app.get("/",function(req,res){
    res.render("index")
})

app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})