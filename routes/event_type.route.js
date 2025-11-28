const express = require('express')
const evenTypeController = require('../controllers/event_type.controller')
const eventTypeRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: EventTypes
 *   description: EventType management
 */

/**
 * @swagger
 * /eventTypes/createEventType:
 *   post:
 *     summary: Create a new EventType
 *     tags: [EventTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Concert
 *     responses:
 *       201:
 *         description: EventType created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
eventTypeRoute.post('/createEventType', evenTypeController.createEventType)

/**
 * @swagger
 * /eventTypes/getEventType:
 *   get:
 *     summary: Get all EventTypes
 *     tags: [EventTypes]
 *     responses:
 *       200:
 *         description: List of EventTypes
 *       500:
 *         description: Server error
 */
eventTypeRoute.get('/getEventType', evenTypeController.getEventType)

/**
 * @swagger
 * /eventTypes/getEventTypeById/{id}:
 *   get:
 *     summary: Get EventType by ID
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: EventType ID
 *     responses:
 *       200:
 *         description: EventType found
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
eventTypeRoute.get('/getEventTypeById/:id', evenTypeController.getEventTypeById)

/**
 * @swagger
 * /eventTypes/updateEventType/{id}:
 *   put:
 *     summary: Update EventType by ID
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: EventType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Concert
 *     responses:
 *       200:
 *         description: EventType updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
eventTypeRoute.put('/updateEventType/:id', evenTypeController.updateEventType)

/**
 * @swagger
 * /eventTypes/deleteEventType/{id}:
 *   delete:
 *     summary: Delete EventType by ID
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: EventType ID
 *     responses:
 *       200:
 *         description: EventType deleted
 *       404:
 *         description: EventType not found
 *       500:
 *         description: Server error
 */
eventTypeRoute.delete('/deleteEventType/:id', evenTypeController.deleteEventType)

module.exports = eventTypeRoute
