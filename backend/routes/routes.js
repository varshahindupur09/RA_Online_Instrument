const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/SurveyResponse');

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
 * /api/surveyResponses/{prolificId}:
 *   get:
 *     summary: Fetch all survey responses for a particular Prolific ID
 *     tags: [SurveyResponse]
 *     parameters:
 *       - in: path
 *         name: prolificId
 *         required: true
 *         schema:
 *           type: string
 *         description: The Prolific ID to fetch the survey responses
 *     responses:
 *       200:
 *         description: Survey responses fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       prolific_id:
 *                         type: string
 *                       test_name:
 *                         type: string
 *                       page_number:
 *                         type: integer
 *                       consent:
 *                         type: boolean
 *                       chart_number:
 *                         type: integer
 *                       graph_question_durations:
 *                         type: array
 *                         items:
 *                           type: number
 *                       per_graph_durations:
 *                         type: array
 *                         items:
 *                           type: number
 *                       time_spent:
 *                         type: number
 *                       last_visited_test_name:
 *                         type: string
 *                       current_visit_test_name:
 *                         type: string
 *                       next_visit_test_name:
 *                         type: string
 *       404:
 *         description: No survey responses found for this Prolific ID
 *       500:
 *         description: Error fetching survey responses
 */


/**
 * @swagger
 * /api/exportSurveyResponsesToExcel:
 *   get:
 *     summary: Export all survey responses to an Excel file
 *     tags: [SurveyResponse]
 *     parameters:
 *       - in: query
 *         name: filename
 *         schema:
 *           type: string
 *         required: false
 *         description: The filename for the exported Excel file (without extension)
 *     responses:
 *       200:
 *         description: An Excel file containing all survey responses
 *         content:
 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Error exporting data to Excel
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
 * /api/surveyResponses/{prolificId}:
 *   delete:
 *     summary: Delete all survey responses for a particular Prolific ID
 *     tags: [SurveyResponse]
 *     parameters:
 *       - in: path
 *         name: prolificId
 *         required: true
 *         schema:
 *           type: string
 *         description: The Prolific ID to delete the survey responses
 *     responses:
 *       200:
 *         description: Deleted survey response(s) for Prolific ID successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: No survey responses found to delete for this Prolific ID
 *       500:
 *         description: Error deleting survey responses
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

/**
 * @swagger
 * /api/surveyResponses/emptyProlificId:
 *   delete:
 *     summary: Delete all survey responses with an empty Prolific ID
 *     tags: [SurveyResponse]
 *     responses:
 *       200:
 *         description: Successfully deleted survey response(s) with an empty Prolific ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Deleted X survey response(s) with an empty Prolific ID"
 *       404:
 *         description: No survey responses found with an empty Prolific ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No survey responses found with an empty Prolific ID."
 *       500:
 *         description: Error deleting survey responses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error deleting survey responses"
 */


router.post('/surveyResponse', surveyController.createSurveyResponse);
router.get('/surveyResponse', surveyController.getAllSurveyResponses);
router.get('/surveyResponses/:prolificId', surveyController.getSurveyResponsesByProlificId);
router.get('/surveyResponse/:id', surveyController.getSurveyResponseById);
router.get('/exportSurveyResponsesToExcel', surveyController.exportSurveyResponsesToExcel);
router.put('/surveyResponse/:id', surveyController.updateSurveyResponse);
router.delete('/surveyResponse/:id',surveyController.deleteSurveyResponse);
router.delete('/surveyResponses/:prolificId', surveyController.deleteSurveyResponsesByProlificId);
router.delete('/surveyResponses', surveyController.deleteAllSurveyResponses);
router.get('/dbHealthCheck', surveyController.dbHealthCheckResponse);
router.delete('/surveyResponses/emptyProlificId', surveyController.deleteSurveyResponseWithEmptyProlificId);

module.exports = router;
