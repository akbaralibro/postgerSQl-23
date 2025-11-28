const { Lang } = require('../models')
const validateLang = require('../validation/lang.validation')

// CREATE
const createLang = async (req, res) => {
	const { error } = validateLang(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newLang = await Lang.create(req.body)
		res.status(201).json(newLang)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

// GET ALL
const getLangs = async (req, res) => {
	try {
		const methods = await Lang.findAll()
		res.status(200).json(methods)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// GET BY ID
const getLangByPk = async (req, res) => {
	try {
		const method = await Lang.findByPk(req.params.id)
		if (!method) return res.status(404).send('Lang not found')
		res.status(200).json(method)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// UPDATE
const updateLang = async (req, res) => {
	const { error } = validateLang(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const method = await Lang.findByPk(req.params.id)
		if (!method) return res.status(404).send('Lang not found')

		await method.update(req.body)
		res.status(200).json({ message: 'Lang updated', method })
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// DELETE
const deleteLang = async (req, res) => {
	try {
		const method = await Lang.findByPk(req.params.id)
		if (!method) return res.status(404).send('Lang not found')

		const deletedData = method.toJSON()
		await method.destroy()

		res.status(200).json({ message: 'Lang deleted', deletedData })
	} catch (err) {
		res.status(500).send(err.message)
	}
}

module.exports = {
	createLang,
	getLangs,
	getLangByPk,
	updateLang,
	deleteLang,
}
