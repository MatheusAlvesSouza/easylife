const jwt = require('jsonwebtoken');
const SECRET = "easylife-secret";

function signInJWT(id) {
    return jwt.sign({ id }, SECRET, {
        expiresIn: 300 // expires in 5min
    });
}

function verifyJWT(req, res, next){
    var token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

      req.userId = decoded.id;
      
      next();
    });
}

module.exports = { verifyJWT,  signInJWT }