const express = require('express')
const cartItemController = require('../controllers/cart_item.controller')

const cartItemRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: CartItems
 *   description: CartItem management
 */

/**
 * @swagger
 * /cartItems/createCartItem:
 *   post:
 *     summary: Create a new CartItem
 *     tags: [CartItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: CartItem created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
cartItemRoute.post('/createCartItem', cartItemController.createCartItem)

/**
 * @swagger
 * /cartItems/getCartItems:
 *   get:
 *     summary: Get all CartItems
 *     tags: [CartItems]
 *     responses:
 *       200:
 *         description: List of CartItems
 *       500:
 *         description: Server error
 */
cartItemRoute.get('/getCartItems', cartItemController.getCartItem)

/**
 * @swagger
 * /cartItems/getCartItemById/{id}:
 *   get:
 *     summary: Get CartItem by ID
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CartItem ID
 *     responses:
 *       200:
 *         description: CartItem details
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
cartItemRoute.get('/getCartItemById/:id', cartItemController.getCartItemById)

/**
 * @swagger
 * /cartItems/updateCartItem/{id}:
 *   put:
 *     summary: Update CartItem by ID
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CartItem ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: CartItem updated successfully
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
cartItemRoute.put('/updateCartItem/:id', cartItemController.updateCartItem)

/**
 * @swagger
 * /cartItems/deleteCartItem/{id}:
 *   delete:
 *     summary: Delete CartItem by ID
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CartItem ID
 *     responses:
 *       200:
 *         description: CartItem deleted successfully
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
cartItemRoute.delete('/deleteCartItem/:id', cartItemController.deleteCartItem)

module.exports = cartItemRoute
