const express = require('express')
const venueTypesRoute = express.Router()
const venueTypeController = require('../controllers/venue_types.controller')

/**
 * @swagger
 * tags:
 *   name: VenueTypes
 *   description: VenueTypes management
 */

/**
 * @swagger
 * /venueTypes/createVenueTypes:
 *   post:
 *     summary: Create a new VenueTypes
 *     tags: [VenueTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: VenueTypes created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
venueTypesRoute.post('/createVenueTypes', venueTypeController.createVenueTypes)

/**
 * @swagger
 * /venueTypes/getVenueTypes:
 *   get:
 *     summary: Get all VenueTypes
 *     tags: [VenueTypes]
 *     responses:
 *       200:
 *         description: List of VenueTypes
 *       500:
 *         description: Server error
 */
venueTypesRoute.get('/getVenueTypes', venueTypeController.getVenueTypes)

/**
 * @swagger
 * /venueTypes/getVenueTypesById/{id}:
 *   get:
 *     summary: Get a VenueTypes by ID
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenueTypes ID
 *     responses:
 *       200:
 *         description: VenueTypes data
 *       404:
 *         description: VenueTypes not found
 *       500:
 *         description: Server error
 */
venueTypesRoute.get('/getVenueTypesById/:id', venueTypeController.getVenueTypesById)

/**
 * @swagger
 * /venueTypes/updateVenueTypes/{id}:
 *   put:
 *     summary: Update a VenueTypes by ID
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenueTypes ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: VenueTypes updated
 *       404:
 *         description: VenueTypes not found
 *       500:
 *         description: Server error
 */
venueTypesRoute.put('/updateVenueTypes/:id', venueTypeController.updateVenueTypes)

/**
 * @swagger
 * /venueTypes/deleteVenueTypes/{id}:
 *   delete:
 *     summary: Delete a VenueTypes by ID
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenueTypes ID
 *     responses:
 *       200:
 *         description: VenueTypes deleted
 *       404:
 *         description: VenueTypes not found
 *       500:
 *         description: Server error
 */
venueTypesRoute.delete('/deleteVenueTypes/:id', venueTypeController.deleteVenueTypes)

module.exports = venueTypesRoute
