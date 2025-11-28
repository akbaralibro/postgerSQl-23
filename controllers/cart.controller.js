const { Cart, Customer } = require('../models')
const ValidateCart = require('../validation/cart.validation')

// PostCart
const createCart = async (req, res) => {
	const { error } = ValidateCart(req.body)
	if (error) res.status(400).send(error.details[0].message)

	try {
		const newCart = await Cart.create(req.body)
		res.status(201).json(newCart)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// GetCart
const getCart = async (req, res) => {
	try {
		const Carts = await Cart.findAll()
		res.status(200).json(Carts)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetCartByPk
const getCartById = async (req, res) => {
	try {
		const cart = await Cart.findByPk(req.params.id, {
			include: [
				{
					model: Customer,
					as: 'customer',
				},
			],
		})

		if (!cart) {
			return res.status(404).send('Cart not found')
		}

		res.status(200).send(cart)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateCart
const updateCart = async (req, res) => {
	const { error } = ValidateCart(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const cart = await Cart.findByPk(req.params.id)
		if (!cart) return res.status(404).send('Cart not found')

		await cart.update(req.body)
		res.status(200).json(cart)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// DeleteCart
const deleteCart = async (req, res) => {
	try {
		const cart = await Cart.findByPk(req.params.id)
		if (!cart) return res.status(404).send('Cart not found')

		const CartData = cart.toJSON()

		await cart.destroy()
		res.status(200).send(CartData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createCart,
	getCart,
	getCartById,
	updateCart,
	deleteCart,
}
