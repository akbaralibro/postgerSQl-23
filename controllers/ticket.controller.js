const { Ticket, Event, Seat, TicketStatus } = require('../models')
const ValidateTicket = require('../validation/ticket.validation')

// PostTicket
const createTicket = async (req, res) => {
	const { error } = ValidateTicket(req.body)
	if (error) res.status(400).send(error.details[0].message)

	try {
		const newTicket = await Ticket.create(req.body)
		res.status(201).json(newTicket)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// GetTicket
const getTicket = async (req, res) => {
	try {
		const Tickets = await Ticket.findAll()
		res.status(200).json(Tickets)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetTicketByPk
const getTicketById = async (req, res) => {
	try {
		const ticket = await Ticket.findByPk(req.params.id, {
			include: [
				{ model: Event, as: 'event' },
				{ model: Seat, as: 'seat' },
				{ model: TicketStatus, as: 'TicketStatus' },
			],
		})

		if (!ticket) {
			return res.status(404).send('Ticket not found')
		}

		res.status(200).send(ticket)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateTicket
const updateTicket = async (req, res) => {
	const { error } = ValidateTicket(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const ticket = await Ticket.findByPk(req.params.id)
		if (!ticket) return res.status(404).send('ticket not found')

		await ticket.update(req.body)
		res.status(200).json(ticket)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// DeleteTicket
const deleteTicket = async (req, res) => {
	try {
		const ticket = await Ticket.findByPk(req.params.id)
		if (!ticket) return res.status(404).send('Ticket not found')

		const TicketData = ticket.toJSON()

		await ticket.destroy()
		res.status(200).send(TicketData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createTicket,
	getTicket,
	getTicketById,
	updateTicket,
	deleteTicket,
}
