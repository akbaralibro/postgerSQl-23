const { TicketStatus } = require('../models')
const ValidateTicketStatus = require('../validation/ticketStatus.validation')

// PostTicketStatus
const createTicketStatus = async (req, res) => {
	const { error } = ValidateTicketStatus(req.body)
	if (error) res.status(400).send(error.details[0].message)

	try {
		const newTicketStatus = await TicketStatus.create(req.body)
		res.status(201).json(newTicketStatus)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// GetTicketStatus
const getTicketStatus = async (req, res) => {
	try {
		const ticketStatuss = await TicketStatus.findAll()
		res.status(200).json(ticketStatuss)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetTicketStatusByPk
const getTicketStatusById = async (req, res) => {
	try {
		const ticketStatus = await TicketStatus.findByPk(req.params.id)
		if (!ticketStatus) {
			return res.status(404).send('TicketStatus not found')
		}

		res.status(200).send(ticketStatus)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateTicketStatus
const updateTicketStatus = async (req, res) => {
	const { error } = ValidateTicketStatus(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const ticketStatus = await TicketStatus.findByPk(req.params.id)
		if (!ticketStatus) return res.status(404).send('TicketStatus not found')

		await ticketStatus.update(req.body)
		res.status(200).json(ticketStatus)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// DeleteTicketStatus
const deleteTicketStatus = async (req, res) => {
	try {
		const ticketStatus = await TicketStatus.findByPk(req.params.id)
		if (!ticketStatus) return res.status(404).send('TicketStatus not found')

		const TicketStatusData = ticketStatus.toJSON()

		await ticketStatus.destroy()
		res.status(200).send(TicketStatusData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createTicketStatus,
	getTicketStatus,
	getTicketStatusById,
	updateTicketStatus,
	deleteTicketStatus,
}
