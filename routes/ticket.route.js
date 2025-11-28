const express = require('express')
const ticketRoute = express.Router()
const ticketController = require('../controllers/ticket.controller')

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Ticket management
 */

/**
 * @swagger
 * /tickets/createTicket:
 *   post:
 *     summary: Create a new Ticket
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: integer
 *               seat_id:
 *                 type: integer
 *               price:
 *                 type: integer
 *               service_free:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *               ticket_type:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
ticketRoute.post('/createTicket', ticketController.createTicket)

/**
 * @swagger
 * /tickets/getTicket:
 *   get:
 *     summary: Get all Tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: List of Tickets
 *       500:
 *         description: Server error
 */
ticketRoute.get('/getTicket', ticketController.getTicket)

/**
 * @swagger
 * /tickets/getTicketById/{id}:
 *   get:
 *     summary: Get Ticket by ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
ticketRoute.get('/getTicketById/:id', ticketController.getTicketById)

/**
 * @swagger
 * /tickets/updateTicket/{id}:
 *   put:
 *     summary: Update Ticket by ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: integer
 *               seat_id:
 *                 type: integer
 *               price:
 *                 type: integer
 *               service_free:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *               ticket_type:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ticket updated successfully
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
ticketRoute.put('/updateTicket/:id', ticketController.updateTicket)

/**
 * @swagger
 * /tickets/deleteTicket/{id}:
 *   delete:
 *     summary: Delete Ticket by ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket deleted successfully
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
ticketRoute.delete('/deleteTicket/:id', ticketController.deleteTicket)

module.exports = ticketRoute
