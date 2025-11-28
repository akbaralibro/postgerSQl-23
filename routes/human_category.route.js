const express = require('express')
const humanCategoryRoute = express.Router()
const humanCategoryController = require('../controllers/human_category.controller')

/**
 * @swagger
 * tags:
 *   name: HumanCategories
 *   description: Human category management
 */

/**
 * @swagger
 * /humanCategories/createHumanCategory:
 *   post:
 *     summary: Create a new human category
 *     tags: [HumanCategories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               startAge:
 *                 type: integer
 *               finishAge:
 *                 type: integer
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *     responses:
 *       201:
 *         description: Human category created successfully
 *       400:
 *         description: Validation error
 */
humanCategoryRoute.post('/createHumanCategory', humanCategoryController.createHumanCategory)

/**
 * @swagger
 * /humanCategories/getHumanCategory:
 *   get:
 *     summary: Get all human categories
 *     tags: [HumanCategories]
 *     responses:
 *       200:
 *         description: List of human categories
 */
humanCategoryRoute.get('/getHumanCategory', humanCategoryController.getHumanCategory)

/**
 * @swagger
 * /humanCategories/getHumanCategoryById/{id}:
 *   get:
 *     summary: Get human category by ID
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human category ID
 *     responses:
 *       200:
 *         description: Human category found
 *       404:
 *         description: Human category not found
 */
humanCategoryRoute.get('/getHumanCategoryById/:id', humanCategoryController.getHumanCategoryById)

/**
 * @swagger
 * /humanCategories/updateHumanCategory/{id}:
 *   put:
 *     summary: Update human category by ID
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               startAge:
 *                 type: integer
 *               finishAge:
 *                 type: integer
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *     responses:
 *       200:
 *         description: Human category updated successfully
 *       404:
 *         description: Human category not found
 */
humanCategoryRoute.put('/updateHumanCategory/:id', humanCategoryController.updateHumanCategory)

/**
 * @swagger
 * /humanCategories/deleteHumanCategory/{id}:
 *   delete:
 *     summary: Delete human category by ID
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human category ID
 *     responses:
 *       200:
 *         description: Human category deleted successfully
 *       404:
 *         description: Human category not found
 */
humanCategoryRoute.delete('/deleteHumanCategory/:id', humanCategoryController.deleteHumanCategory)

module.exports = humanCategoryRoute
