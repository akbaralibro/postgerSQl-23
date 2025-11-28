const express = require('express')
const venueRoute = express.Router()
const venueController = require('../controllers/venue.controller')

/**
 * @swagger
 * tags:
 *   name: Venues
 *   description: Venue management
 */

/**
 * @swagger
 * /venues/createVenue:
 *   post:
 *     summary: Create a new venue
 *     tags: [Venues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venue created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
venueRoute.post('/createVenue', venueController.createVenue)

/**
 * @swagger
 * /venues/getVenue:
 *   get:
 *     summary: Get all venues
 *     tags: [Venues]
 *     responses:
 *       200:
 *         description: List of venues
 *       500:
 *         description: Internal server error
 */
venueRoute.get('/getVenue', venueController.getVenue)

/**
 * @swagger
 * /venues/getVenueById/{id}:
 *   get:
 *     summary: Get venue by ID
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Internal server error
 */
venueRoute.get('/getVenueById/:id', venueController.getVenueById)

/**
 * @swagger
 * /venues/{id}:
 *   put:
 *     summary: Update venue by ID
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Internal server error
 */
venueRoute.put('/updateVenue/:id', venueController.updateVenue)

/**
 * @swagger
 * /venues/{id}:
 *   delete:
 *     summary: Delete venue by ID
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue deleted successfully
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Internal server error
 */
venueRoute.delete('/deleteVenue/:id', venueController.deleteVenue)

module.exports = venueRoute
