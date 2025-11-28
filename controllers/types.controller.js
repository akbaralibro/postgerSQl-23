const { Types } = require('../models')
const validateTypes = require('../validation/types.validation')

// CREATE
const createTypes = async (req, res) => {
	const { error } = validateTypes(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newTypes = await Types.create(req.body)
		res.status(201).json(newTypes)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

// GET ALL
const getTypes = async (req, res) => {
	try {
		const methods = await Types.findAll()
		res.status(200).json(methods)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// GET BY ID
const getTypesByPk = async (req, res) => {
	try {
		const method = await Types.findByPk(req.params.id)
		if (!method) return res.status(404).send('Types not found')
		res.status(200).json(method)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// UPDATE
const updateTypes = async (req, res) => {
	const { error } = validateTypes(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const method = await Types.findByPk(req.params.id)
		if (!method) return res.status(404).send('Types not found')

		await method.update(req.body)
		res.status(200).json({ message: 'Types updated', method })
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// DELETE
const deleteTypes = async (req, res) => {
	try {
		const method = await Types.findByPk(req.params.id)
		if (!method) return res.status(404).send('Types not found')

		const deletedData = method.toJSON()
		await method.destroy()

		res.status(200).json({ message: 'Types deleted', deletedData })
	} catch (err) {
		res.status(500).send(err.message)
	}
}

module.exports = {
	createTypes,
	getTypes,
	getTypesByPk,
	updateTypes,
	deleteTypes,
}
