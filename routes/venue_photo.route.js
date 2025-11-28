const express = require('express')
const venuePhotoRoute = express.Router()
const venuePhotoController = require('../controllers/venue_photo.controller')

/**
 * @swagger
 * tags:
 *   name: VenuePhotos
 *   description: VenuePhoto management
 */

/**
 * @swagger
 * /venuePhotos/createVenuePhoto:
 *   post:
 *     summary: Create a new VenuePhoto
 *     tags: [VenuePhotos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: VenuePhoto created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
venuePhotoRoute.post('/createVenuePhoto', venuePhotoController.createVenuePhoto)

/**
 * @swagger
 * /venuePhotos/getVenuePhoto:
 *   get:
 *     summary: Get all VenuePhotos
 *     tags: [VenuePhotos]
 *     responses:
 *       200:
 *         description: List of VenuePhotos
 *       500:
 *         description: Server error
 */
venuePhotoRoute.get('/getVenuePhoto', venuePhotoController.getVenuePhoto)

/**
 * @swagger
 * /venuePhotos/getVenuePhotoById/{id}:
 *   get:
 *     summary: Get a VenuePhoto by ID
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenuePhoto ID
 *     responses:
 *       200:
 *         description: VenuePhoto data
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRoute.get('/getVenuePhotoById/:id', venuePhotoController.getVenuePhotoById)

/**
 * @swagger
 * /venuePhotos/updateVenuePhoto/{id}:
 *   put:
 *     summary: Update a VenuePhoto by ID
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenuePhoto ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: VenuePhoto updated
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRoute.put('/updateVenuePhoto/:id', venuePhotoController.updateVenuePhoto)

/**
 * @swagger
 * /venuePhotos/deleteVenuePhoto/{id}:
 *   delete:
 *     summary: Delete a VenuePhoto by ID
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenuePhoto ID
 *     responses:
 *       200:
 *         description: VenuePhoto deleted
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
venuePhotoRoute.delete('/deleteVenuePhoto/:id', venuePhotoController.deleteVenuePhoto)

module.exports = venuePhotoRoute
