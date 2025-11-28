const express = require('express')
const regionRoute = express.Router()
const regionController = require('../controllers/region.controller')

/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Region management
 */

/**
 * @swagger
 * /regions/createRegion:
 *   post:
 *     summary: Create a new Region
 *     tags: [Regions]
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
 *         description: Region created successfully
 *       400:
 *         description: Validation error
 *       409:
 *         description: Region already exists
 *       500:
 *         description: Server error
 */
regionRoute.post('/createRegion', regionController.createRegion)

/**
 * @swagger
 * /regions/getRegions:
 *   get:
 *     summary: Get all Regions
 *     tags: [Regions]
 *     responses:
 *       200:
 *         description: List of Regions
 *       500:
 *         description: Server error
 */
regionRoute.get('/getRegions', regionController.getRegions)

/**
 * @swagger
 * /regions/getRegionByPk/{id}:
 *   get:
 *     summary: Get a Region by ID
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region data
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
regionRoute.get('/getRegionByPk/:id', regionController.getRegionByPk)

/**
 * @swagger
 * /regions/updateRegion/{id}:
 *   put:
 *     summary: Update a Region by ID
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
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
 *         description: Region updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
regionRoute.put('/updateRegion/:id', regionController.updateRegion)

/**
 * @swagger
 * /regions/deleteRegion/{id}:
 *   delete:
 *     summary: Delete a Region by ID
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
regionRoute.delete('/deleteRegion/:id', regionController.deleteRegion)

module.exports = regionRoute
