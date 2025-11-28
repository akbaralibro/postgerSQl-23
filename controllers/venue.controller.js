const { Venue, Region, District } = require('../models')
const ValidateVenue = require('../validation/venue.validation')

// Create Venue
const createVenue = async (req, res) => {
	const { error } = ValidateVenue(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newVenue = await Venue.create(req.body)
		res.status(201).json(newVenue)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}


// Get all Venuees
const getVenue = async (req, res) => {
	try {
		const venue = await Venue.findAll()
		res.status(200).json(venue)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get Venue by ID
const getVenueById = async (req, res) => {
	try {
		const venue = await Venue.findByPk(req.params.id, {
			include: [
				{ model: Region, as: 'region' },
				{ model: District, as: 'district' },
			],
		})

		if (!venue) return res.status(404).send('Venue not found')

		res.status(200).send(venue)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Update Venue
const updateVenue = async (req, res) => {
	const { error } = ValidateVenue(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const venue = await Venue.findByPk(req.params.id)
		if (!venue) return res.status(404).send('Venue not found')

		await venue.update(req.body)
		res.status(200).json(venue)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Delete Venue
const deleteVenue = async (req, res) => {
	try {
		const venue = await Venue.findByPk(req.params.id)
		if (!venue) return res.status(404).send('Venue not found')

		const data = venue.toJSON()
		await venue.destroy()
		res.status(200).send(data)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createVenue,
	getVenue,
	getVenueById,
	updateVenue,
	deleteVenue,
}
