const { VenueTypes, Types, Venue } = require('../models')
const ValidateVenueTypes = require('../validation/venueTypes.validation')

// Create VenueTypes
const createVenueTypes = async (req, res) => {
	const { error } = ValidateVenueTypes(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newVenueTypes = await VenueTypes.create(req.body)
		res.status(201).json(newVenueTypes)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get all VenueTypeses
const getVenueTypes = async (req, res) => {
	try {
		const venueTypes = await VenueTypes.findAll()
		res.status(200).json(venueTypes)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get VenueTypes by ID
const getVenueTypesById = async (req, res) => {
	try {
		const venueTypes = await VenueTypes.findByPk(req.params.id, {
			include: [
				{ model: Types, as: 'type' },
				{ model: Venue, as: 'venue' },
			],
		})

		if (!venueTypes) return res.status(404).send('VenueTypes not found')

		res.status(200).send(venueTypes)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Update VenueTypes
const updateVenueTypes = async (req, res) => {
	const { error } = ValidateVenueTypes(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const venueTypes = await VenueTypes.findByPk(req.params.id)
		if (!venueTypes) return res.status(404).send('VenueTypes not found')

		await venueTypes.update(req.body)
		res.status(200).json(venueTypes)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Delete VenueTypes
const deleteVenueTypes = async (req, res) => {
	try {
		const venueTypes = await VenueTypes.findByPk(req.params.id)
		if (!venueTypes) return res.status(404).send('VenueTypes not found')

		const data = venueTypes.toJSON()
		await venueTypes.destroy()
		res.status(200).send(data)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createVenueTypes,
	getVenueTypes,
	getVenueTypesById,
	updateVenueTypes,
	deleteVenueTypes,
}
