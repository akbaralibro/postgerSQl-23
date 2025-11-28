const { District, Region } = require('../models')
const ValidateDistrict = require('../validation/district.validation')

// Create District
const createDistrict = async (req, res) => {
	const { error } = ValidateDistrict(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newDistrict = await District.create(req.body)
		res.status(201).json(newDistrict)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get all Districtes
const getDistrict = async (req, res) => {
	try {
		const district = await District.findAll()
		res.status(200).json(district)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get District by ID
const getDistrictById = async (req, res) => {
	try {
		const district = await District.findByPk(req.params.id, {
			include: [
				{ model: Region, as: 'region' },
			],
		})

		if (!district) return res.status(404).send('District not found')

		res.status(200).send(district)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Update District
const updateDistrict = async (req, res) => {
	const { error } = ValidateDistrict(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const district = await District.findByPk(req.params.id)
		if (!district) return res.status(404).send('District not found')

		await District.update(req.body)
		res.status(200).json(district)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Delete District
const deleteDistrict = async (req, res) => {
	try {
		const district = await District.findByPk(req.params.id)
		if (!district) return res.status(404).send('District not found')

		const data = district.toJSON()
		await district.destroy()
		res.status(200).send(data)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createDistrict,
	getDistrict,
	getDistrictById,
	updateDistrict,
	deleteDistrict,
}
