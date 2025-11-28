const { Seat, SeatType, Venue } = require('../models')
const ValidateSeat = require('../validation/seat.validation')

// Create Seat
const createSeat = async (req, res) => {
	const { error } = ValidateSeat(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newSeat = await Seat.create(req.body)
		res.status(201).json(newSeat)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get all Seates
const getSeat = async (req, res) => {
	try {
		const seats = await Seat.findAll()
		res.status(200).json(seats)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get Seat by ID
const getSeatById = async (req, res) => {
	try {
		const seat = await Seat.findByPk(req.params.id, {
			include: [
				{ model: SeatType, as: 'SeatType' },
				{ model: Venue, as: 'venue' },
			],
		})

		if (!seat) return res.status(404).send('Seat not found')

		res.status(200).send(seat)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Update Seat
const updateSeat = async (req, res) => {
	const { error } = ValidateSeat(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const seat = await Seat.findByPk(req.params.id)
		if (!seat) return res.status(404).send('Seat not found')

		await seat.update(req.body)
		res.status(200).json(seat)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Delete Seat
const deleteSeat = async (req, res) => {
	try {
		const seat = await Seat.findByPk(req.params.id)
		if (!seat) return res.status(404).send('Seat not found')

		const data = seat.toJSON()
		await seat.destroy()
		res.status(200).send(data)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createSeat,
	getSeat,
	getSeatById,
	updateSeat,
	deleteSeat,
}
