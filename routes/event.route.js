const express = require('express')
const eventController = require('../controllers/event.controller')
const eventRoute = express.Router()


/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API for managing events
 */

/**
 * @swagger
 * /events/createEvent:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               startDate:
 *                 type: string
 *               startTime:
 *                 type: string
 *               finishDate:
 *                 type: string
 *               finishTime:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: integer
 *               human_category_id:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               release_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Validation error
 */
eventRoute.post('/createEvent', eventController.createEvent)

/**
 * @swagger
 * /events/getEvent/{id}:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: List of events
 */
eventRoute.get('/getEvent/:id', eventController.getEvent)

/**
 * @swagger
 * /events/getEventById/{id}:
 *   get:
 *     summary: Get event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event data
 *       404:
 *         description: Event not found
 */
eventRoute.get('/getEventById/:id', eventController.getEventById)

/**
 * @swagger
 * /events/updateEvent/{id}:
 *   put:
 *     summary: Update event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       404:
 *         description: Event not found
 */
eventRoute.put('/updateEvent/:id', eventController.updateEvent)

/**
 * @swagger
 * /events/deleteEvent/{id}:
 *   delete:
 *     summary: Delete event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 */
eventRoute.delete('/deleteEvent/:id', eventController.deleteEvent)

module.exports = eventRoute
