const express = require('express')
const seatRoute = express.Router()
const seatController = require('../controllers/seat.controller')

/**
 * @swagger
 * tags:
 *   name: Seats
 *   description: Seat management
 */

/**
 * @swagger
 * /seats/createSeat:
 *   post:
 *     summary: Create a new Seat
 *     tags: [Seats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: integer
 *               rowNumber:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               locationInSchema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
seatRoute.post('/createSeat', seatController.createSeat)

/**
 * @swagger
 * /seats/getSeat:
 *   get:
 *     summary: Get all Seats
 *     tags: [Seats]
 *     responses:
 *       200:
 *         description: List of Seats
 *       500:
 *         description: Server error
 */
seatRoute.get('/getSeat', seatController.getSeat)

/**
 * @swagger
 * /seats/getSeatById/{id}:
 *   get:
 *     summary: Get a Seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat data
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
seatRoute.get('/getSeatById/:id', seatController.getSeatById)

/**
 * @swagger
 * /seats/updateSeat/{id}:
 *   put:
 *     summary: Update a Seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: integer
 *               rowNumber:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               locationInSchema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
seatRoute.put('/updateSeat/:id', seatController.updateSeat)

/**
 * @swagger
 * /seats/deleteSeat/{id}:
 *   delete:
 *     summary: Delete a Seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
seatRoute.delete('/deleteSeat/:id', seatController.deleteSeat)

module.exports = seatRoute
