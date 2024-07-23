const express = require('express');
const router = express.Router();
const SurveyResponse = require('../controllers/SurveyResponse');


/**
 * @swagger
 * components:
 *   schemas:
 *     SurveyResponse:
 *       type: object
 *       required:
 *         - prolific_id
 *         - test_name
 *         - page_number
 *         - responses
 *       properties:
 *         prolific_id:
 *           type: string
 *           description: The prolific ID of the participant.
 *         test_name:
 *           type: string
 *           description: The name of the survey.
 *         page_number:
 *           type: number
 *           description: The page number of the survey.
 *         responses:
 *           type: object
 *           additionalProperties:
 *             type: string
 *           description: The responses to the survey questions.
 */

/**
 * @swagger
 * tags:
 *   - name: SurveyResponse
 *     description: Manage survey responses
 */

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
 *             $ref: '#/components/schemas/SurveyResponse'
 *     responses:
 *       201:
 *         description: Survey response created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/surveyResponse:
 *   get:
 *     summary: Get all survey responses
 *     tags: [SurveyResponse]
 *     responses:
 *       200:
 *         description: List of survey responses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SurveyResponse'
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
 *         schema:
 *           type: string
 *         required: true
 *         description: The survey response ID
 *     responses:
 *       200:
 *         description: Survey response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SurveyResponse'
 *       404:
 *         description: Entry not found
 */

/**
 * @swagger
 * /api/surveyResponse/{id}:
 *   put:
 *     summary: Update a survey response by ID
 *     tags: [SurveyResponse]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The survey response ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SurveyResponse'
 *     responses:
 *       200:
 *         description: Survey response updated
 *       404:
 *         description: Entry not found
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
 *         schema:
 *           type: string
 *         required: true
 *         description: The survey response ID
 *     responses:
 *       200:
 *         description: Survey response deleted
 *       404:
 *         description: Entry not found
 */


router.get('/', SurveyResponse.dbHealthCheckResponse);
router.post('/surveyResponse', SurveyResponse.createSurveyResponse);
router.get('/surveyResponse', SurveyResponse.getAllSurveyResponses);
router.get('/surveyResponse/:id', SurveyResponse.getSurveyResponseById);
router.put('/surveyResponse/:id', SurveyResponse.updateSurveyResponse);
router.delete('/surveyResponse/:id', SurveyResponse.deleteSurveyResponse);

module.exports = router;