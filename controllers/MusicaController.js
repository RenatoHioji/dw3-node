import express from "express"
const router = express.Router()
import MusicaService from "../services/MusicaService.js"

router.get("/musica", function(req, res){
    MusicaService.SelectAll().then((musicas) =>{
        res.render("musicas", {
            musicas : musicas
        })
    })
})

router.post("/musicas/new", (req, res) => {
    MusicaService.Create(
        req.body.nome,
        req.body.cpf,
        req.body.endereco
    )
    res.redirect("/musicas")
})

router.get("/musicas/delete/:id", (req, res) => {
    const id = req.params.id
    MusicaService.Delete(id)
    res.redirect("/musicas")
})

router.get("/musicas/edit/:id", (req, res) => {
    const id = req.params.id
    MusicaService.SelectOne(id).then((musica) => {
        res.render("MusicaEdit", {
            musica : musica
        })
    })
})

router.post("/musicas/update/:id", (req, res) => {
    MusicaService.Update(
        req.body.id,
        req.body.nome,
        req.body.cpf,
        req.body.endereco
    )
    res.redirect("/musicas")
})

export default router 