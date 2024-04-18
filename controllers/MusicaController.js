import express from "express"
import MusicaService from "../services/MusicaService.js"
import multer from "multer"
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/imgs'); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


router.get("/", function(req, res){
    MusicaService.SelectAll().then((musicas) =>{
        res.render("index", {
            musicas : musicas
        })
    })
})

router.get("/create", (req, res) => {
    res.render("create")
})


router.post("/", upload.single('imagem'), (req, res) => {
    if(!req.file){
        res.status(400).send("BAD REQUEST IMAGEM NÃO INSERIDA")
    }
    MusicaService.Create(
        req.body.nome,
        req.file.originalname,
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
        res.render("update", {
            musica : musica
        })
    })
})
router.post("/update", upload.single('imagem'), (req, res) => {
    if(!req.file){
        var url = ""
    }else{
        var url = req.file.originalname
    }
    MusicaService.Update(
        req.body.id,
        req.body.nome,
        url,
        req.body.ano
    )
    res.redirect("/")
})

export default router