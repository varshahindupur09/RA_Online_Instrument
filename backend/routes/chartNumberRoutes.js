// routes/chartNumberRoutes.js
const express = require('express');
const router = express.Router();
// const ChartNumberController = require('../controllers/ChartNumberController');
const { createChartNumber, getChartNumber, updateChartNumber, deleteChartNumber } = require('../controllers/ChartNumberController');

/**
 * @swagger
 * /api/chart-number:
 *   post:
 *     summary: Create a new chart number
 *     tags: [ChartNumber]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               last_assigned_chart:
 *                 type: number
 *                 description: Chart number to be inserted.
 *                 example: 1
 *     responses:
 *       201:
 *         description: Chart number created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 last_assigned_chart:
 *                   type: number
 *                   example: 1
 */

/**
 * @swagger
 * /api/chart-number:
 *   get:
 *     summary: Retrieve the last assigned chart number
 *     tags: [ChartNumber]
 *     responses:
 *       200:
 *         description: A single chart number
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 last_assigned_chart:
 *                   type: number
 *                   description: The last assigned chart number.
 *                   example: 1
 */

/**
 * @swagger
 * /api/chart-number:
 *   put:
 *     summary: Update the last assigned chart number
 *     tags: [ChartNumber]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               last_assigned_chart:
 *                 type: number
 *                 description: New chart number to assign which should be between 1-4.
 *                 example: 2
 *     responses:
 *       200:
 *         description: The updated chart number
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 last_assigned_chart:
 *                   type: number
 *                   example: 2
 */

/**
 * @swagger
 * /api/chart-number:
 *   delete:
 *     summary: Delete the specified chart number
 *     tags: [ChartNumber]
 *     responses:
 *       200:
 *         description: Chart number deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Chart number deleted successfully"
 */


router.post('/chart-number', createChartNumber);
router.get('/chart-number', getChartNumber);
router.put('/chart-number', updateChartNumber);
router.delete('/chart-number', deleteChartNumber);

module.exports = router;
