const { Admin } = require('../models')
const ValidateAdmin = require('../validation/admin.validation')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

// PostAdmin
const createAdmin = async (req, res) => {
	const { error } = ValidateAdmin(req.body)
	if (error) return res.status(400).json({ message: error.details[0].message })

	try {
		const newAdmin = await Admin.create(req.body)
		res.status(201).json(newAdmin)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// LOGIN FUNKSIYASINI O'ZGARUVCHIGA BERIB QO'YING
const login = async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await Admin.findOne({ where: { email } })
		if (!user) return res.status(404).json({ message: "User not found" })

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) return res.status(401).json({ message: "Invalid credentials" })

		const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" })

		res.json({
			token,
			user: {
				id: user.id,
				name: user.name,
				email: user.email
			}
		})
	} catch (err) {
		console.error("Login Error:", err)
		res.status(500).json({ message: "Server error" })
	}
}

// GetAdmin
const getAdmin = async (req, res) => {
	try {
		const Admins = await Admin.findAll()
		res.status(200).json(Admins)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetAdminByPk
const getAdminById = async (req, res) => {
	try {
		const admin = await Admin.findByPk(req.params.id)
		if (!admin) {
			return res.status(404).send('Admin not found')
		}

		res.status(200).send(admin)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateAdmin
const updateAdmin = async (req, res) => {
	const { error } = ValidateAdmin(req.body)
	if (error) return res.status(400).json({ message: error.details[0].message })

	try {
		const admin = await Admin.findByPk(req.params.id)
		if (!admin) return res.status(404).send('Admin not found')

		await admin.update(req.body)
		res.status(200).json(admin)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// DeleteAdmin
const deleteAdmin = async (req, res) => {
	try {
		const admin = await Admin.findByPk(req.params.id)
		if (!admin) return res.status(404).send('Admin not found')

		const AdminData = admin.toJSON()
		await admin.destroy()

		res.status(200).send(AdminData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createAdmin,
	login,       
	getAdmin,
	getAdminById,
	updateAdmin,
	deleteAdmin,
}
