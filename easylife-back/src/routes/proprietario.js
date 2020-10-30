const router = require('express').Router();
const auth = require('../services/auth');
const jwt = require('../infrastructure/jwt');
const proprietarioService = require('../services/proprietario');

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

        res.status(200).send(proprietario);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.get("/", async (req, res) => {
    try {
        const proprietarios = await proprietarioService.GetAll();

        res.status(200).send(proprietarios);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

module.exports = router;