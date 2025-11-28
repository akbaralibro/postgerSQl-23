const express = require('express')
const districtController = require('../controllers/district.controller')
const districtRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: Districts
 *   description: District management
*/

/**
 * @swagger
 * /districts/createDistrict:
 *   post:
 *     summary: Create a new district
 *     tags: [Districts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: District created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
*/
districtRoute.post('/createDistrict', districtController.createDistrict)

/**
 * @swagger
 * /districts/getDistrict:
 *   get:
 *     summary: Get all districts
 *     tags: [Districts]
 *     responses:
 *       200:
 *         description: List of districts
 *       500:
 *         description: Internal server error
 */
districtRoute.get('/getDistrict', districtController.getDistrict)

/**
 * @swagger
 * /districts/getDistrictById/{id}:
 *   get:
 *     summary: Get district by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     responses:
 *       200:
 *         description: District details
 *       404:
 *         description: District not found
 *       500:
 *         description: Internal server error
 */

districtRoute.get('/getDistrictById/:id', districtController.getDistrictById)
/**
 * @swagger
 * /districts/updateDistrict/{id}:
 *   put:
 *     summary: Update district by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: District updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: District not found
 *       500:
 *         description: Internal server error
 */

districtRoute.put('/updateDistrict/:id', districtController.updateDistrict)
/**
 * @swagger
 * /districts/deleteDistrict/{id}:
 *   delete:
 *     summary: Delete district by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     responses:
 *       200:
 *         description: District deleted successfully
 *       404:
 *         description: District not found
 *       500:
 *         description: Internal server error
 */

districtRoute.delete('/deleteDistrict/:id', districtController.deleteDistrict)

module.exports = districtRoute
