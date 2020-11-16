const router = require('express').Router();
const auth = require('../services/auth');
const jwt = require('../infrastructure/jwt');
const fotoService = require('../services/foto');
const proprietarioService = require('../services/proprietario');
const avaliacaoService = require('../services/avaliacao');
const favoritoService = require('../services/favorito');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + "." + 'jpg');        
    }
  });

const parser = multer({ storage: storage });

router.use(jwt.verifyJWT);

router.post("/", async (req, res) => {
    try {
        const proprietario = await proprietarioService.Create(req.body);
        const usuario = await auth.AddProprietario(req.userId, proprietario._id);

        res.status(200).send(usuario);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const proprietario = await proprietarioService.FindById(req.params.id);
        
        const json = proprietario.toJSON();
        const avg = await avaliacaoService.CalculateAverage(proprietario._id);
        const favorito = await favoritoService.FindByClienteIdAndProprietarioId(req.clienteId, proprietario._id);
        
        json.estrelas = avg;
        json.isFavorite = (favorito.length > 0) ? true : false;
        
        res.status(200).send(json);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.get("/", async (req, res) => {
    try {
        let proprietarios = [];
        
        if(req.query.words)
            proprietarios = await proprietarioService.FindByWord(req.query.words, 
                req.query.deficiencias);
        else
            proprietarios = await proprietarioService.GetAll();

        const result = await Promise.all(proprietarios.map(async (proprietario) => {
            const json = proprietario.toJSON();
            const avg = await avaliacaoService.CalculateAverage(proprietario._id);
            
            json.estrelas = avg;

            return json
        }));

        res.status(200).send(result);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.post("/foto", async (req, res) => {
    try {
        parser.single('foto')(req, res, err => {
            if (err)
                res.status(500).json({ error: 1, payload: err });
            else {
                const image = {};
                image.url = `http://localhost:3001/uploads/${req.file.filename}`;
                image.descricao = req.query.descricao;
                image.proprietario = req.proprietarioId;
                
                fotoService.Create(image).then(async (response) => {
                    res.status(200).json(response);
                });
            }
        });
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

module.exports = router;