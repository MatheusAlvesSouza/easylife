const router = require('express').Router();
const jwt = require('../infrastructure/jwt');
const avaliacaoService = require('../services/avaliacao');

router.use(jwt.verifyJWT);

router.post("/", async (req, res) => {
    try {
        const avaliacao = await avaliacaoService.Create({
            estrelas: req.body.estrelas,
            comentario: req.body.comentario,
            clienteId: req.clienteId,
            proprietarioId: req.body.proprietarioId
        });

        res.status(200).send(avaliacao);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

router.get("/:proprietarioId", async (req, res) => {
    try {
        const avaliacoes = await avaliacaoService.FindByProprietarioId(req.params.proprietarioId)

        res.status(200).send(avaliacoes);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});


module.exports = router;