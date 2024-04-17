import express from "express"
import MusicaService from "../services/MusicaService.js"
const router = express.Router()

router.get("/",  async function(req, res){
    const musicas = await MusicaService.SelectAll()
    console.log("CONTROLLER- ", musicas)


    console.log("render template")
    res.render("index", {musicas: musicas})

})  
router.post("/musica", (req, res) => {
    MusicaService.Create(
        req.body.nome,
        req.body.url,
        req.body.ano
    )
    res.redirect("/")
})

router.get("/delete/:id", (req, res) => {
    const id = req.params.id
    MusicaService.Delete(id)
    res.redirect("/")
})

router.get("/update/:id", (req, res) => {
    const id = req.params.id
    MusicaService.SelectOne(id).then((musica) => {
        res.render("MusicaEdit", {
            musica : musica
        })
    })
})

export default router