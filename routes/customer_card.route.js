const express = require('express')
const customerCardController = require('../controllers/customer_card.controller')

const customerCardRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: CustomerCards
 *   description: CustomerCard management
 */

/**
 * @swagger
 * /customerCards/createCustomerCard:
 *   post:
 *     summary: Create a new CustomerCard
 *     tags: [CustomerCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: CustomerCard created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
customerCardRoute.post('/createCustomerCard', customerCardController.createCustomerCard)

/**
 * @swagger
 * /customerCards/getCustomerCard:
 *   get:
 *     summary: Get all CustomerCards
 *     tags: [CustomerCards]
 *     responses:
 *       200:
 *         description: List of CustomerCards
 *       500:
 *         description: Server error
 */
customerCardRoute.get('/getCustomerCard', customerCardController.getCustomerCard)

/**
 * @swagger
 * /customerCards/getCustomerCardById/{id}:
 *   get:
 *     summary: Get CustomerCard by ID
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCard ID
 *     responses:
 *       200:
 *         description: CustomerCard details
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
customerCardRoute.get('/getCustomerCardById/:id', customerCardController.getCustomerCardById)

/**
 * @swagger
 * /customerCards/updateCustomerCard/{id}:
 *   put:
 *     summary: Update CustomerCard by ID
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCard ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: CustomerCard updated successfully
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
customerCardRoute.put('/updateCustomerCard/:id', customerCardController.updateCustomerCard)

/**
 * @swagger
 * /customerCards/deleteCustomerCard/{id}:
 *   delete:
 *     summary: Delete CustomerCard by ID
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCard ID
 *     responses:
 *       200:
 *         description: CustomerCard deleted successfully
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
customerCardRoute.delete('/deleteCustomerCard/:id', customerCardController.deleteCustomerCard)


module.exports = customerCardRoute
