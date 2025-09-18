const generateToken = require("../config/utils")
const Admin = require("../models/AdminSchema")
const bcrypt = require('bcryptjs')

const adminRegister = async (req, res) => {
    try {
        const { name, email, password, } = req.body
        if (!name || !email || !password) {
            return res.status(500).json({ message: "all fields required" })
        }
        const adminExist = await Admin.findOne({ email })
        if (adminExist) {
            return res.status(500).json({ message: 'admin already exist' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword,
        })
        await newAdmin.save()
        res.status(200).json({ message: 'admin account created succesfull', newAdmin })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "error occured on adminRegister" })
    }
}

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(500).json({ message: "all fields required" })
        }
        const admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(400).json({ message: "admin not found" })
        }
        const comparePassword = await bcrypt.compare(password, admin.password)
        if (!comparePassword) {
            return res.status(500).json({ message: 'password not match' })
        }
        const token = generateToken(admin._id, admin.role, res)
        res.status(200).json({ message: 'login succesfull', email: admin.email, token })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "error occured on adminLogin" })
    }
}

const adminLogout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: 'logout succesfull' })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "error occured on adminLogout" })
    }
}
module.exports = { adminRegister, adminLogin, adminLogout }