const express = require('express')
const seatType = express.Router()
const seatTypeController = require('../controllers/seat_type.controller')


/**
 * @swagger
 * tags:
 *   name: SeatTypes
 *   description: Seat type management
 */

/**
 * @swagger
 * /seatTypes/createSeatType:
 *   post:
 *     summary: Create a new seat type
 *     tags: [SeatTypes]
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
 *         description: SeatType created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
seatType.post('/createSeatType',seatTypeController.createSeatType)

/**
 * @swagger
 * /seatTypes/getSeatType:
 *   get:
 *     summary: Get all seat types
 *     tags: [SeatTypes]
 *     responses:
 *       200:
 *         description: List of seat types
 *       500:
 *         description: Server error
 */
seatType.get('/getSeatType',seatTypeController.getSeatType)

/**
 * @swagger
 * /seatTypes/getSeatTypeById/{id}:
 *   get:
 *     summary: Get seat type by ID
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
 *     responses:
 *       200:
 *         description: SeatType found
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
seatType.get('/getSeatTypeById/:id',seatTypeController.getSeatTypeById)

/**
 * @swagger
 * /seatTypes/updateSeatType/{id}:
 *   put:
 *     summary: Update seat type by ID
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
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
 *         description: SeatType updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
seatType.put('/updateSeatType/:id',seatTypeController.updateSeatType)

/**
 * @swagger
 * /seatTypes/deleteSeatType/{id}:
 *   delete:
 *     summary: Delete seat type by ID
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
 *     responses:
 *       200:
 *         description: SeatType deleted successfully
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
seatType.delete('/deleteSeatType/:id',seatTypeController.deleteSeatType)

module.exports = seatType
