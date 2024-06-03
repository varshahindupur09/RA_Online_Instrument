const express = require('express');
const router = express.Router();
const paperFoldingTest1Controller = require('./controllers/PaperFoldingTest1Controller');
const paperFoldingTest2Controller = require('./controllers/PaperFoldingTest2Controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     PaperFoldingTest1:
 *       type: object
 *       required:
 *         - question_number
 *         - answer_inserted
 *       properties:
 *         question_number:
 *           type: number
 *           description: The question number.
 *         answer_inserted:
 *           type: string
 *           description: The inserted answer.
 */

/**
 * @swagger
 * tags:
 *   - name: PaperFoldingTest1
 *     description: Everything about your Paper Folding Test 1
 *   - name: PaperFoldingTest2
 *     description: Manage Paper Folding Test 2
 */

/**
 * @swagger
 * /api/paperFoldingTest1:
 *   post:
 *     summary: Create a new Paper Folding Test 1 entry
 *     tags: [PaperFoldingTest1]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - detail
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the test
 *               detail:
 *                 type: string
 *                 description: Details of the test
 *     responses:
 *       201:
 *         description: Paper folding test created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/paperFoldingTest1:
 *   get:
 *     summary: Get all Paper Folding Test 1 entries
 *     tags: [PaperFoldingTest1]
 *     responses:
 *       200:
 *         description: List of Paper Folding Test 1 entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PaperFoldingTest1'
 */

/**
 * @swagger
 * /api/paperFoldingTest1/{id}:
 *   get:
 *     summary: Get a Paper Folding Test 1 by ID
 *     tags: [PaperFoldingTest1]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Paper Folding Test 1 id
 *     responses:
 *       200:
 *         description: Paper Folding Test 1 entry by id
 *       404:
 *         description: Entry not found
 */

/**
 * @swagger
 * /api/paperFoldingTest1/{id}:
 *   put:
 *     summary: Update a Paper Folding Test 1 entry by ID
 *     tags: [PaperFoldingTest1]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Paper Folding Test 1 id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaperFoldingTest1'
 *     responses:
 *       200:
 *         description: Paper Folding Test 1 updated
 *       404:
 *         description: Entry not found
 */

/**
 * @swagger
 * /api/paperFoldingTest1/{id}:
 *   delete:
 *     summary: Delete a Paper Folding Test 1 entry by ID
 *     tags: [PaperFoldingTest1]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Paper Folding Test 1 id
 *     responses:
 *       200:
 *         description: Paper Folding Test 1 deleted
 *       404:
 *         description: Entry not found
 */

// Similar Swagger documentation and routes for PaperFoldingTest2

router.post('/paperFoldingTest1', paperFoldingTest1Controller.createPaperFoldingTest1);
router.get('/paperFoldingTest1', paperFoldingTest1Controller.getAllPaperFoldingTest1);
router.get('/paperFoldingTest1/:id', paperFoldingTest1Controller.getPaperFoldingTest1ById);
router.put('/paperFoldingTest1/:id', paperFoldingTest1Controller.updatePaperFoldingTest1);
router.delete('/paperFoldingTest1/:id', paperFoldingTest1Controller.deletePaperFoldingTest1);

router.post('/paperFoldingTest2', paperFoldingTest2Controller.createPaperFoldingTest2);
router.get('/paperFoldingTest2', paperFoldingTest2Controller.getAllPaperFoldingTest2);
router.get('/paperFoldingTest2/:id', paperFoldingTest2Controller.getPaperFoldingTest2ById);
router.put('/paperFoldingTest2/:id', paperFoldingTest2Controller.updatePaperFoldingTest2);
router.delete('/paperFoldingTest2/:id', paperFoldingTest2Controller.deletePaperFoldingTest2);

module.exports = router;