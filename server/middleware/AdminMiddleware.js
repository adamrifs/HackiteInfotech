const jwt = require('jsonwebtoken')
const Admin = require('../models/AdminSchema')
const dotenv = require('dotenv')
dotenv.config()
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(500).json({ message: 'token required' })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(500).json({ message: 'unauthorized login' })
        }
        const admin = await Admin.findById(decoded.id).select('-password')
        if (!admin) {
            res.status(400).json({ message: 'admin not found' })
        }
        req.admin = admin
        next()
    } catch (error) {
        console.log(error, 'error occured on protect route')
    }
}
module.exports = protectRoute