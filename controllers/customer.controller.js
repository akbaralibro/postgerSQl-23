const { Customer } = require('../models')
const ValidateCustomer = require('../validation/customer.validation')

// PostCustomer
const createCustomer = async (req, res) => {
	const { error } = ValidateCustomer(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newCustomer = await Customer.create(req.body)
		res.status(201).json(newCustomer)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}


// GetCustomer
const getCustomer = async (req, res) => {
	try {
		const Customers = await Customer.findAll()
		res.status(200).json(Customers)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetCustomerByPk
const getCustomerById = async (req, res) => {
	try {
		const customer = await Customer.findByPk(req.params.id)
		if (!customer) {
			return res.status(404).send('Customer not found')
		}

		res.status(200).send(customer)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateCustomer
const updateCustomer = async (req, res) => {
	const { error } = ValidateCustomer(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const customer = await Customer.findByPk(req.params.id)
		if (!customer) return res.status(404).send('Customer not found')

		await customer.update(req.body)
		res.status(200).json(customer)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// DeleteCustomer
const deleteCustomer = async (req, res) => {
	try {
		const Customer = await Customer.findByPk(req.params.id)
		if (!Customer) return res.status(404).send('Customer not found')

		const CustomerData = Customer.toJSON()

		await Customer.destroy()
		res.status(200).send(CustomerData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createCustomer,
	getCustomer,
	getCustomerById,
	updateCustomer,
	deleteCustomer,
}
