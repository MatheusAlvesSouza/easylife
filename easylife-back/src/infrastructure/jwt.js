const jwt = require('jsonwebtoken');
const SECRET = "easylife-secret";

function signInJWT(user) {
    const userId = user._id;
    const clienteId = (user.cliente) ? user.cliente._id : null;
    const proprietarioId = (user.proprietario) ? user.proprietario._id : null;

    return jwt.sign({ userId, clienteId, proprietarioId }, SECRET, {
        expiresIn: 864000 // segundos 24h
    });
}

function verifyJWT(req, res, next){
    var token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

      req.userId = decoded.userId;
      req.clienteId = decoded.clienteId;
      req.proprietarioId = decoded.proprietarioId;
      
      next();
    });
}

module.exports = { verifyJWT,  signInJWT }