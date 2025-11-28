const express = require('express')
const typesRoute = express.Router()
const typesController = require('../controllers/types.controller')

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types management
 */

/**
 * @swagger
 * /types/createTypes:
 *   post:
 *     summary: Create a new Type
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Type created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
typesRoute.post('/createTypes', typesController.createTypes)

/**
 * @swagger
 * /types/getTypes:
 *   get:
 *     summary: Get all Types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: List of Types
 *       500:
 *         description: Server error
 */
typesRoute.get('/getTypes', typesController.getTypes)

/**
 * @swagger
 * /types/getTypesByPk/{id}:
 *   get:
 *     summary: Get a Type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type data
 *       404:
 *         description: Type not found
 *       500:
 *         description: Server error
 */
typesRoute.get('/getTypesByPk/:id', typesController.getTypesByPk)

/**
 * @swagger
 * /types/updateTypes/{id}:
 *   put:
 *     summary: Update a Type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Type updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Type not found
 *       500:
 *         description: Server error
 */
typesRoute.put('/updateTypes/:id', typesController.updateTypes)

/**
 * @swagger
 * /types/deleteTypes/{id}:
 *   delete:
 *     summary: Delete a Type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type deleted
 *       404:
 *         description: Type not found
 *       500:
 *         description: Server error
 */
typesRoute.delete('/deleteTypes/:id', typesController.deleteTypes)

module.exports = typesRoute
