const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET; 
module.exports = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("There is no token over here")
    } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.json({auth: false, message:"You failed to auth"})
            }
            req.username = decoded.username
            return next();
        })
    }

}