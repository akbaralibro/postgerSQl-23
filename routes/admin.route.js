const express = require('express')
const adminController = require('../controllers/admin.controller')

const adminRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Admin management
 */

/**
 * @swagger
 * /admins/createAdmin:
 *   post:
 *     summary: Create a new Admin
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
adminRoute.post('/createAdmin', adminController.createAdmin)

/**
 * @swagger
 * /admins/login:
 *   post:
 *     summary: Admin login
 *     tags: [Admins]
 *     description: Login admin with login and password, returns JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
adminRoute.post("/login", adminController.login)

/**
 * @swagger
 * /admins/getAdmin:
 *   get:
 *     summary: Get all Admins
 *     tags: [Admins]
 *     responses:
 *       200:
 *         description: List of Admins
 *       500:
 *         description: Server error
 */
adminRoute.get('/getAdmin', adminController.getAdmin)

/**
 * @swagger
 * /admins/getAdminById/{id}:
 *   get:
 *     summary: Get Admin by ID
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
adminRoute.get('/getAdminById/:id', adminController.getAdminById)

/**
 * @swagger
 * /admins/updateAdmin/{id}:
 *   put:
 *     summary: Update Admin by ID
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
adminRoute.put('/updateAdmin/:id', adminController.updateAdmin)

/**
 * @swagger
 * /admins/deleteAdmin/{id}:
 *   delete:
 *     summary: Delete Admin by ID
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin deleted successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
adminRoute.delete('/deleteAdmin/:id', adminController.deleteAdmin)

module.exports = adminRoute
