const express = require('express')
const bookingController = require('../controllers/booking.controller')

const bookingRoute = express.Router()


/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management
 */

/**
 * @swagger
 * /bookings/createBooking:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_coupon_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       500:
 *         description: Server error
 */
bookingRoute.post('/createBooking', bookingController.createBooking)

/**
 * @swagger
 * /bookings/getAllBookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: List of bookings
 *       500:
 *         description: Server error
 */
bookingRoute.get('/getAllBookings', bookingController.getBooking)

/**
 * @swagger
 * /bookings/getBookingByPk/{id}:
 *   get:
 *     summary: Get booking by primary key
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
bookingRoute.get('/getBookingByPk/:id', bookingController.getBookingById)

/**
 * @swagger
 * /bookings/updateBooking/{id}:
 *   put:
 *     summary: Update booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_coupon_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
bookingRoute.put('/updateBooking/:id', bookingController.updateBooking)

/**
 * @swagger
 * /bookings/deleteBooking/{id}:
 *   delete:
 *     summary: Delete booking by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
bookingRoute.delete('/deleteBooking/:id', bookingController.deleteBooking)

module.exports = bookingRoute
