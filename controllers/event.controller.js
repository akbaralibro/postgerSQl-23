const { Event, EventType, HumanCategory, Venue, Lang } = require('../models')
const ValidateEvent = require('../validation/event.validation')

// Create Event
const createEvent = async (req, res) => {
	const { error } = ValidateEvent(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newEvent = await Event.create(req.body)
		res.status(201).json(newEvent)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get all Eventes
const getEvent = async (req, res) => {
	try {
		const addresses = await Event.findAll()
		res.status(200).json(addresses)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get Event by ID
const getEventById = async (req, res) => {
	try {
		const address = await Event.findByPk(req.params.id, {
			include: [
				{
					model: EventType,
					as: 'eventType'
				},
				{
					model: HumanCategory,
					as: 'humanCategory'
				},
				{
					model: Venue,
					as: 'venue'
				},
				{
					model: Lang,
					as: 'lang'
				},
			],
		})

		if (!address) return res.status(404).send('Event not found')

		res.status(200).send(address)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Update Event
const updateEvent = async (req, res) => {
	const { error } = ValidateEvent(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const address = await Event.findByPk(req.params.id)
		if (!address) return res.status(404).send('Event not found')

		await address.update(req.body)
		res.status(200).json(address)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Delete Event
const deleteEvent = async (req, res) => {
	try {
		const address = await Event.findByPk(req.params.id)
		if (!address) return res.status(404).send('Event not found')

		const data = address.toJSON()
		await address.destroy()
		res.status(200).send(data)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createEvent,
	getEvent,
	getEventById,
	updateEvent,
	deleteEvent,
}
