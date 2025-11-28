const express = require('express')
const langController = require('../controllers/lang.controller')
const langRoute = express.Router()

/**
 * @swagger
 * tags:
 *   name: Langs
 *   description: Language management
*/

/**
 * @swagger
 * /langs/createLang:
 *   post:
 *     summary: Create a new language
 *     tags: [Langs]
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
 *         description: Language created successfully
 *       400:
 *         description: Validation error
 *       409:
 *         description: Language already exists
 *       500:
 *         description: Internal server error
*/
langRoute.post('/createLang', langController.createLang)

/**
 * @swagger
 * /langs/getLangs:
 *   get:
 *     summary: Get all languages
 *     tags: [Langs]
 *     responses:
 *       200:
 *         description: List of languages
 *       500:
 *         description: Internal server error
*/
langRoute.get('/getLangs', langController.getLangs)

/**
 * @swagger
 * /langs/getLangByPk/{id}:
 *   get:
 *     summary: Get language by ID
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Language ID
 *     responses:
 *       200:
 *         description: Language details
 *       404:
 *         description: Language not found
 *       500:
 *         description: Internal server error
*/
langRoute.get('/getLangByPk/:id', langController.getLangByPk)

/**
 * @swagger
 * /langs/updateLang/{id}:
 *   put:
 *     summary: Update language by ID
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Language ID
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
 *         description: Language updated successfully
 *       404:
 *         description: Language not found
 *       500:
 *         description: Internal server error
*/
langRoute.put('/updateLang/:id', langController.updateLang)

/**
 * @swagger
 * /langs/deleteLang/{id}:
 *   delete:
 *     summary: Delete language by ID
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Language ID
 *     responses:
 *       200:
 *         description: Language deleted successfully
 *       404:
 *         description: Language not found
 *       500:
 *         description: Internal server error
*/
langRoute.delete('/deleteLang/:id', langController.deleteLang)

module.exports = langRoute
