const { CartItem, Cart, Ticket } = require('../models')
const ValidateCartItem = require('../validation/cartItem.validation')

// PostCartItem
const createCartItem = async (req, res) => {
	const { error } = ValidateCartItem(req.body)
	if (error) res.status(400).send(error.details[0].message)

	try {
		const newCartItem = await CartItem.create(req.body)
		res.status(201).json(newCartItem)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// GetCartItem
const getCartItem = async (req, res) => {
	try {
		const CartItems = await CartItem.findAll()
		res.status(200).json(CartItems)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// GetCartItemByPk
const getCartItemById = async (req, res) => {
	try {
		const cartItem = await CartItem.findByPk(req.params.id, {
			include: [
				{
					model: Cart,
					as: 'cart',
				},
				{
					model: Ticket,
					as: 'ticket',
				},
			],
		})

		if (!cartItem) {
			return res.status(404).send('cartItem not found')
		}

		res.status(200).send(cartItem)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// UpdateCartItem
const updateCartItem = async (req, res) => {
	const { error } = ValidateCartItem(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const cartItem = await CartItem.findByPk(req.params.id)
		if (!cartItem) return res.status(404).send('CartItem not found')

		await cartItem.update(req.body)
		res.status(200).json(cartItem)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// DeleteCartItem
const deleteCartItem = async (req, res) => {
	try {
		const cartItem = await CartItem.findByPk(req.params.id)
		if (!cartItem) return res.status(404).send('CartItem not found')

		const CartItemData = cartItem.toJSON()

		await cartItem.destroy()
		res.status(200).send(CartItemData)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	createCartItem,
	getCartItem,
	getCartItemById,
	updateCartItem,
	deleteCartItem,
}
