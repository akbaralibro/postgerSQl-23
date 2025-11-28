
const { Booking, PayMethod, DeliveryMethod, Cart } = require('../models')
const ValidateBooking = require('../validation/booking.validation')

// PostBooking
const createBooking = async (req, res) => {
	const { error } = ValidateBooking(req.body)
	if (error) res.status(400).send(error.details[0].message)

	try {
		const newBooking = await Booking.create(req.body)
		res.status(201).json(newBooking)

		res.status(201).json(Booking)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// GetBooking
const getBooking = async (req, res) => {
	try {
		const bookings = await Booking.findAll()
		res.status(200).json(bookings)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetBookingByPk
const getBookingById = async (req, res) => {
	try {
		const booking = await Booking.findByPk(req.params.id, {
			include: [
				{
					model: PayMethod,
					as: 'payMethod_booking',
				},
				{
					model: DeliveryMethod,
					as: 'deliveryMethod_booking',
				},
				{
					model: Cart,
					as: 'cart_booking',
				},
			],
		})

		if (!booking) {
			return res.status(404).send('Booking not found')
		}

		res.status(200).send(booking)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateBooking
const updateBooking = async (req, res) => {
	const { error } = ValidateBooking(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const booking = await Booking.findByPk(req.params.id)
		if (!booking) return res.status(404).send('Booking not found')

		await booking.update(req.body)

		res.status(200).json(booking)
	} catch (error) {
		res.status(500).send(error.message)
	}
}


// DeleteBooking
const deleteBooking = async (req, res) => {
	try {
		const Booking = await Booking.findByPk(req.params.id)
		if (!Booking) return res.status(404).send('Booking not found')

		const BookingData = Booking.toJSON()

		await Booking.destroy()
		res.status(200).send(BookingData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}


module.exports = {
	createBooking,
	getBooking,
	getBookingById,
	updateBooking,
	deleteBooking,
}
