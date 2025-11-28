const express = require('express')
const paymentController = require('../controllers/payment_method.controller')

const paymentMethodRoute = express.Router()


/**
 * @swagger
 * tags:
 *   name: PaymentMethods
 *   description: PaymentMethod management
 */



/**
 * @swagger
 * /paymentMethods/createPaymentMethod:
 *   post:
 *     summary: Create a new payment method
 *     tags: [PaymentMethods]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Credit Card
 *     responses:
 *       201:
 *         description: PaymentMethod created
 */
paymentMethodRoute.post('/createPaymentMethod', paymentController.createPayMethod)


/**
 * @swagger
 *  /paymentMethods/getAllPaymentMethods:
 *   get:
 *     summary: Get all payment methods
 *     tags: [PaymentMethods]
 *     responses:
 *       200:
 *         description: List of payment methods
 */
paymentMethodRoute.get('/getAllPaymentMethods', paymentController.getPayMethods)

/**
 * @swagger
 *  /paymentMethods/getPaymentMethodByPk/{id}:
 *   get:
 *     summary: Get a payment method by ID
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: PaymentMethod ID
 *     responses:
 *       200:
 *         description: PaymentMethod found
 *       404:
 *         description: PaymentMethod not found
 */
paymentMethodRoute.get('/getPaymentMethodByPk/:id', paymentController.getPayMethodByPk)

/**
 * @swagger
 *  /paymentMethods/updatePaymentMethod/{id}:
 *   put:
 *     summary: Update a payment method by ID
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Name
 *     responses:
 *       200:
 *         description: PaymentMethod updated
 *       404:
 *         description: PaymentMethod not found
 */
paymentMethodRoute.put('/updatePaymentMethod/:id', paymentController.updatePayMethod)

/**
 * @swagger
 *  /paymentMethods/deletePaymentMethod/{id}:
 *   delete:
 *     summary: Delete a payment method by ID
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: PaymentMethod deleted
 *       404:
 *         description: PaymentMethod not found
 */
paymentMethodRoute.delete('/deletePaymentMethod/:id', paymentController.deletePayMethod)

module.exports = paymentMethodRoute
