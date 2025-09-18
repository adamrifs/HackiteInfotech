const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const generateToken = (id, role, res) => {
    const token = jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "5d" })
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'none'
    })
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    return token
}
module.exports = generateToken