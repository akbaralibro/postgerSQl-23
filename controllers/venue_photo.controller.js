const { VenuePhoto, Venue } = require('../models')
const ValidateVenuePhoto = require('../validation/venuePhoto.validation')

// Create VenuePhoto
const createVenuePhoto = async (req, res) => {
	const { error } = ValidateVenuePhoto(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newVenuePhoto = await VenuePhoto.create(req.body)
		res.status(201).json(newVenuePhoto)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get all VenuePhotoes
const getVenuePhoto = async (req, res) => {
	try {
		const venuePhoto = await VenuePhoto.findAll()
		res.status(200).json(venuePhoto)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get VenuePhoto by ID
const getVenuePhotoById = async (req, res) => {
	try {
		const venuePhoto = await VenuePhoto.findByPk(req.params.id, {
			include: [
				{ model: Venue, as: 'venue' },
			],
		})

		if (!venuePhoto) return res.status(404).send('VenuePhoto not found')

		res.status(200).send(venuePhoto)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Update VenuePhoto
const updateVenuePhoto = async (req, res) => {
	const { error } = ValidateVenuePhoto(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const venuePhoto = await VenuePhoto.findByPk(req.params.id)
		if (!venuePhoto) return res.status(404).send('VenuePhoto not found')

		await venuePhoto.update(req.body)
		res.status(200).json(venuePhoto)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Delete VenuePhoto
const deleteVenuePhoto = async (req, res) => {
	try {
		const venuePhoto = await VenuePhoto.findByPk(req.params.id)
		if (!venuePhoto) return res.status(404).send('VenuePhoto not found')

		const data = venuePhoto.toJSON()
		await venuePhoto.destroy()
		res.status(200).send(data)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createVenuePhoto,
	getVenuePhoto,
	getVenuePhotoById,
	updateVenuePhoto,
	deleteVenuePhoto,
}
