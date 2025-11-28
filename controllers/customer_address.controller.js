const { CustomerAddress, Customer } = require('../models')
const ValidateCustomerAddress = require('../validation/customerAddress.validation')

// Create CustomerAddress
const createCustomerAddress = async (req, res) => {
	const { error } = ValidateCustomerAddress(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newCustomerAddress = await CustomerAddress.create(req.body)
		res.status(201).json(newCustomerAddress)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get all CustomerAddresses
const getCustomerAddress = async (req, res) => {
	try {
		const addresses = await CustomerAddress.findAll()
		res.status(200).json(addresses)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Get CustomerAddress by ID
const getCustomerAddressById = async (req, res) => {
	try {
		const address = await CustomerAddress.findByPk(req.params.id, {
			include: [{ model: Customer, as: 'customer' }],
		})

		if (!address) return res.status(404).send('CustomerAddress not found')

		res.status(200).send(address)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Update CustomerAddress
const updateCustomerAddress = async (req, res) => {
	const { error } = ValidateCustomerAddress(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const address = await CustomerAddress.findByPk(req.params.id)
		if (!address) return res.status(404).send('CustomerAddress not found')

		await address.update(req.body)
		res.status(200).json(address)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// Delete CustomerAddress
const deleteCustomerAddress = async (req, res) => {
	try {
		const address = await CustomerAddress.findByPk(req.params.id)
		if (!address) return res.status(404).send('CustomerAddress not found')

		const data = address.toJSON()
		await address.destroy()
		res.status(200).send(data)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createCustomerAddress,
	getCustomerAddress,
	getCustomerAddressById,
	updateCustomerAddress,
	deleteCustomerAddress,
}
