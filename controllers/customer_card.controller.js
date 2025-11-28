const { CustomerCard, Customer } = require('../models')
const ValidateCustomerCard = require('../validation/customerCard.validation')

// PostCustomerCard
const createCustomerCard = async (req, res) => {
	const { error } = ValidateCustomerCard(req.body)
	if (error) res.status(400).send(error.details[0].message)

	try {
		const newCustomerCard = await CustomerCard.create(req.body)
		res.status(201).json(newCustomerCard)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// GetCustomerCard
const getCustomerCard = async (req, res) => {
	try {
		const CustomerCards = await CustomerCard.findAll()
		res.status(200).json(CustomerCards)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetCustomerCardByPk
const getCustomerCardById = async (req, res) => {
	try {
		const customerCard = await CustomerCard.findByPk(req.params.id, {
			include: [
				{
					model: Customer,
					as: 'customer',
				},
			],
		})

		if (!customerCard) {
			return res.status(404).send('CustomerCard not found')
		}

		res.status(200).send(customerCard)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateCustomerCard
const updateCustomerCard = async (req, res) => {
	const { error } = ValidateCustomerCard(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const customerCard = await CustomerCard.findByPk(req.params.id)
		if (!customerCard) return res.status(404).send('CustomerCard not found')

		await customerCard.update(req.body)
		res.status(200).json(customerCard)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// DeleteCustomerCard
const deleteCustomerCard = async (req, res) => {
	try {
		const customerCard = await CustomerCard.findByPk(req.params.id)
		if (!customerCard) return res.status(404).send('CustomerCard not found')

		const CustomerCardData = customerCard.toJSON()

		await CustomerCard.destroy()
		res.status(200).send(CustomerCardData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createCustomerCard,
	getCustomerCard,
	getCustomerCardById,
	updateCustomerCard,
	deleteCustomerCard,
}
