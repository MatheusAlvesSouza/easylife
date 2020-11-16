const router = require('express').Router();
const auth = require('../services/auth');
const jwt = require('../infrastructure/jwt');
const clienteService = require('../services/cliente');
const favoritoService = require('../services/favorito');

router.use(jwt.verifyJWT);

router.post("/", async (req, res) => {
    try {
        const cliente = await clienteService.Create(req.body);
        const usuario = await auth.AddCliente(req.userId, cliente._id);

        res.status(200).send(usuario);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.get("/favorito", async (req, res) => {
    try {
        const favoritos = await favoritoService.FindByClienteId(cliente._id)
        
        res.status(200).send(favoritos);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.post("/favorito", async (req, res) => {
    try {
        const favorito = await favoritoService.Create({
            proprietario: req.body.proprietarioId,
            cliente: req.clienteId,
        })
        
        res.status(200).send(favorito);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.delete("/favorito/:proprietarioId", async (req, res) => {
    try {
        await favoritoService.Delete(req.params.proprietarioId, req.clienteId)
        
        res.status(204).send();
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

module.exports = router;