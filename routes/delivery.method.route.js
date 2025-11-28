const express = require('express')
const deliveryController = require('../controllers/delivery_method.controller')

const deliveryMethodRoute = express.Router()


/**
 * @swagger
 * tags:
 *   name: deliveryMethods
 *   description: DeliveryMethods management
 */

/**
 * @swagger
 * /deliveryMethods/createDeliveryMethod:
 *   post:
 *     summary: Create a new payment method
 *     tags: [deliveryMethods]
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
 *       202:
 *         description: deliveryMethod created
 */
deliveryMethodRoute.post('/createdeliveryMethod', deliveryController.createDeliveryMethod)


/**
 * @swagger
 *  /deliveryMethods/getAlldeliveryMethods:
 *   get:
 *     summary: Get all delivery methods
 *     tags: [deliveryMethods]
 *     responses:
 *       200:
 *         description: List of delivery methods
 */
deliveryMethodRoute.get('/getAlldeliveryMethods', deliveryController.getDeliveryMethods)

/**
 * @swagger
 *  /deliveryMethods/getdeliveryMethodByPk/{id}:
 *   get:
 *     summary: Get a delivery method by ID
 *     tags: [deliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: deliveryMethod ID
 *     responses:
 *       200:
 *         description: deliveryMethod found
 *       404:
 *         description: deliveryMethod not found
 */
deliveryMethodRoute.get('/getDeliveryMethodByPk/:id', deliveryController.getDeliveryMethodByPk)

/**
 * @swagger
 *  /deliveryMethods/updatedeliveryMethod/{id}:
 *   put:
 *     summary: Update a payment method by ID
 *     tags: [deliveryMethods]
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
 *         description: deliveryMethod updated
 *       404:
 *         description: deliveryMethod not found
 */
deliveryMethodRoute.put('/updateDeliveryMethod/:id', deliveryController.updateDeliveryMethod)

/**
 * @swagger
 *  /deliveryMethods/deleteDeliveryMethod/{id}:
 *   delete:
 *     summary: Delete a delivery method by ID
 *     tags: [deliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: deliveryMethod deleted
 *       404:
 *         description: deliveryMethod not found
 */
deliveryMethodRoute.delete('/deleteDeliveryMethod/:id', deliveryController.deleteDeliveryMethod)

module.exports = deliveryMethodRoute
