const express = require('express')
const cartController = require('../controllers/cart.controller')

const cartRoute = express.Router()


/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Cart management
 */

/**
 * @swagger
 * /carts/createCart:
 *   post:
 *     summary: Create a new Cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Cart created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
cartRoute.post('/createCart', cartController.createCart)

/**
 * @swagger
 * /carts/getCart:
 *   get:
 *     summary: Get all carts
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: List of carts
 *       500:
 *         description: Server error
 */
cartRoute.get('/getCart', cartController.getCart)

/**
 * @swagger
 * /carts/getCartById/{id}:
 *   get:
 *     summary: Get cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartRoute.get('/getCartById/:id', cartController.getCartById)

/**
 * @swagger
 * /carts/updateCart/{id}:
 *   put:
 *     summary: Update cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart updated successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartRoute.put('/updateCart/:id', cartController.updateCart)

/**
 * @swagger
 * /carts/deleteCart/{id}:
 *   delete:
 *     summary: Delete cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart deleted successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
cartRoute.delete('/deleteCart/:id', cartController.deleteCart)


module.exports = cartRoute