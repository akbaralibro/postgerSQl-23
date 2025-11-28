const express = require('express')
const customerController = require('../controllers/customer.controller')
const customerRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer management
 */

/**
 * @swagger
 * /customers/createCustomer:
 *   post:
 *     summary: Create a new Customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *               lang_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
customerRoute.post('/createCustomer', customerController.createCustomer)

/**
 * @swagger
 * /customers/getCustomer:
 *   get:
 *     summary: Get all Customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: List of Customers
 *       500:
 *         description: Server error
 */
customerRoute.get('/getCustomer', customerController.getCustomer)

/**
 * @swagger
 * /customers/getCustomerById/{id}:
 *   get:
 *     summary: Get Customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customerRoute.get('/getCustomerById/:id', customerController.getCustomerById)

/**
 * @swagger
 * /customers/updateCustomer/{id}:
 *   put:
 *     summary: Update Customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *               lang_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       404:
 *         description: Customer not found
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
customerRoute.put('/updateCustomer/:id', customerController.updateCustomer)

/**
 * @swagger
 * /customers/deleteCustomer/{id}:
 *   delete:
 *     summary: Delete Customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customerRoute.delete('/deleteCustomer/:id', customerController.deleteCustomer)

module.exports = customerRoute
