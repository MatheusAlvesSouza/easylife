const router = require('express').Router();
const jwt = require('../infrastructure/jwt');
const authService = require('../services/auth');

router.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await authService.Login(email, senha);

    if(!usuario)
        res.status(400).send({message: "Email ou senha incorretos."});

    res.status(200).send({
        token: jwt.signInJWT(usuario.toJSON()._id),
        accountInfo: usuario
    });
});

router.post("/create", async (req, res) => {
    try {
        const usuario = await authService.Create(req.body);

        res.status(200).send(usuario);
    } catch (e) {
        res.status(400).send({ message: e.message});
    }
});

module.exports = router;