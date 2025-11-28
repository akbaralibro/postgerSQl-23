const express = require('express')
const ticketStatus = express.Router()
const ticketStatusController = require('../controllers/ticket_status.controller')

/**
 * @swagger
 * tags:
 *   name: TicketStatus
 *   description: TicketStatus management
 */

/**
 * @swagger
 * /ticketStatus/createTicketStatus:
 *   post:
 *     summary: Create a new TicketStatus
 *     tags: [TicketStatus]
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
 *         description: TicketStatus created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
ticketStatus.post('/createTicketStatus', ticketStatusController.createTicketStatus)

/**
 * @swagger
 * /ticketStatus/getTicketStatus:
 *   get:
 *     summary: Get all TicketStatus
 *     tags: [TicketStatus]
 *     responses:
 *       200:
 *         description: List of TicketStatus
 *       500:
 *         description: Server error
 */
ticketStatus.get('/getTicketStatus', ticketStatusController.getTicketStatus)

/**
 * @swagger
 * /ticketStatus/getTicketStatusById/{id}:
 *   get:
 *     summary: Get TicketStatus by ID
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketStatus ID
 *     responses:
 *       200:
 *         description: TicketStatus details
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
ticketStatus.get('/getTicketStatusById/:id', ticketStatusController.getTicketStatusById)

/**
 * @swagger
 * /ticketStatus/updateTicketStatus/{id}:
 *   put:
 *     summary: Update TicketStatus by ID
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketStatus ID
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
 *         description: TicketStatus updated successfully
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
ticketStatus.put('/updateTicketStatus/:id', ticketStatusController.updateTicketStatus)

/**
 * @swagger
 * /ticketStatus/deleteTicketStatus/{id}:
 *   delete:
 *     summary: Delete TicketStatus by ID
 *     tags: [TicketStatus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketStatus ID
 *     responses:
 *       200:
 *         description: TicketStatus deleted successfully
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
ticketStatus.delete('/deleteTicketStatus/:id', ticketStatusController.deleteTicketStatus)

module.exports = ticketStatus
