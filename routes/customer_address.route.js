const express = require('express')
const customerAddressesController = require('../controllers/customer_address.controller')


const customerAddressRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: CustomerAddresses
 *   description: API for managing customer addresses
 */

/**
 * @swagger
 * /customerAddresses/createCustomerAddress:
 *   post:
 *     summary: Create a new customer address
 *     tags: [CustomerAddresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: integer
 *               location:
 *                 type: string
 *               postIndex:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: CustomerAddress created successfully
 *       400:
 *         description: Validation error
 */
customerAddressRoute.post('/createCustomerAddress', customerAddressesController.createCustomerAddress)

/**
 * @swagger
 * /customerAddresses/getCustomerAddress:
 *   get:
 *     summary: Get all customer addresses
 *     tags: [CustomerAddresses]
 *     responses:
 *       200:
 *         description: List of customer addresses
 */
customerAddressRoute.get('/getCustomerAddress', customerAddressesController.getCustomerAddress)

/**
 * @swagger
 * /customerAddresses/getCustomerAddressById/{id}:
 *   get:
 *     summary: Get a customer address by ID
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     responses:
 *       200:
 *         description: CustomerAddress data
 *       404:
 *         description: CustomerAddress not found
 */
customerAddressRoute.get('/getCustomerAddressById/:id', customerAddressesController.getCustomerAddressById)

/**
 * @swagger
 * /customerAddresses/updateCustomerAddress/{id}:
 *   put:
 *     summary: Update a customer address by ID
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: CustomerAddress updated successfully
 *       404:
 *         description: CustomerAddress not found
 */
customerAddressRoute.put('/updateCustomerAddress/:id', customerAddressesController.updateCustomerAddress)

/**
 * @swagger
 * /customerAddresses/deleteCustomerAddress/{id}:
 *   delete:
 *     summary: Delete a customer address by ID
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     responses:
 *       200:
 *         description: CustomerAddress deleted successfully
 *       404:
 *         description: CustomerAddress not found
 */
customerAddressRoute.delete('/deleteCustomerAddress/:id', customerAddressesController.deleteCustomerAddress)

module.exports = customerAddressRoute