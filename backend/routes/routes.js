const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/SurveyResponse.js');

/**
 * @swagger
 * /api/surveyResponse:
 *   post:
 *     summary: Create a new survey response
 *     tags: [SurveyResponse]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prolific_id:
 *                 type: string
 *                 example: "123"
 *               test_name:
 *                 type: string
 *                 example: "Paper-Folding-Test-1"
 *               page_number:
 *                 type: number
 *                 example: 1
 *               consent:
 *                  type: boolean
 *                  example: false
 *               responses:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *               time_spent:
 *                 type: number
 *                 example: 10
 *     responses:
 *       201:
 *         description: Survey response created successfully
 *       500:
 *         description: Error inserting document
 */

/**
 * @swagger
 * /api/surveyResponse:
 *   get:
 *     summary: Get all survey responses
 *     tags: [SurveyResponse]
 *     responses:
 *       200:
 *         description: A list of survey responses
 *       500:
 *         description: Error fetching documents
 */

/**
 * @swagger
 * /api/surveyResponse/{id}:
 *   get:
 *     summary: Get a survey response by ID
 *     tags: [SurveyResponse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The survey response ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A survey response
 *       404:
 *         description: Document not found
 *       500:
 *         description: Error fetching document
 */

/**
 * @swagger
 * /api/surveyResponse/{id}:
 *   put:
 *     summary: Update a survey response
 *     tags: [SurveyResponse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The survey response ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prolific_id:
 *                 type: string
 *                 example: "123"
 *               test_name:
 *                 type: string
 *                 example: "Paper-Folding-Test-1"
 *               page_number:
 *                 type: number
 *                 example: 1
 *               responses:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *               time_spent:
 *                 type: number
 *                 example: 10
 *     responses:
 *       200:
 *         description: Survey response updated successfully
 *       404:
 *         description: Document not found
 *       500:
 *         description: Error updating document
 */

/**
 * @swagger
 * /api/surveyResponse/{id}:
 *   delete:
 *     summary: Delete a survey response by ID
 *     tags: [SurveyResponse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The survey response ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Survey response deleted successfully
 *       404:
 *         description: Document not found
 *       500:
 *         description: Error deleting document
 */

/**
 * @swagger
 * /api/surveyResponses:
 *   delete:
 *     summary: Delete all survey responses
 *     tags: [SurveyResponse]
 *     responses:
 *       200:
 *         description: All survey responses deleted successfully
 *       500:
 *         description: Error deleting documents
 */

router.post('/api/surveyResponse', surveyController.createSurveyResponse);
router.get('/api/surveyResponse', surveyController.getAllSurveyResponses);
router.get('/api/surveyResponse/:id', surveyController.getSurveyResponseById);
router.put('/api/surveyResponse/:id', surveyController.updateSurveyResponse);
router.delete('/api/surveyResponse/:id', surveyController.deleteSurveyResponse);
router.get('/api/dbHealthCheck', surveyController.dbHealthCheckResponse);
router.delete('/api/surveyResponses', surveyController.deleteAllSurveyResponses);

module.exports = router;
