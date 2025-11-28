const { Region } = require('../models')
const validateRegion = require('../validation/region.validation')

// CREATE
const createRegion = async (req, res) => {
	const { error } = validateRegion(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newRegion = await Region.create(req.body)
		res.status(201).json(newRegion)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

// GET ALL
const getRegions = async (req, res) => {
	try {
		const methods = await Region.findAll()
		res.status(200).json(methods)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// GET BY ID
const getRegionByPk = async (req, res) => {
	try {
		const method = await Region.findByPk(req.params.id)
		if (!method) return res.status(404).send('Region not found')
		res.status(200).json(method)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// UPDATE
const updateRegion = async (req, res) => {
	const { error } = validateRegion(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const method = await Region.findByPk(req.params.id)
		if (!method) return res.status(404).send('Region not found')

		await method.update(req.body)
		res.status(200).json({ message: 'Region updated', method })
	} catch (err) {
		res.status(500).send(err.message)
	}
}

// DELETE
const deleteRegion = async (req, res) => {
	try {
		const method = await Region.findByPk(req.params.id)
		if (!method) return res.status(404).send('Region not found')

		const deletedData = method.toJSON()
		await method.destroy()

		res.status(200).json({ message: 'Region deleted', deletedData })
	} catch (err) {
		res.status(500).send(err.message)
	}
}

module.exports = {
	createRegion,
	getRegions,
	getRegionByPk,
	updateRegion,
	deleteRegion,
}
