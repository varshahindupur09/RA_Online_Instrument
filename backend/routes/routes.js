// routes.js
const express = require('express');
const router = express.Router();
const paperFoldingTest1Controller = require('../controllers/paperFoldingTest1Controller');
const paperFoldingTest2Controller = require('../controllers/paperFoldingTest2Controller');

// Routes for PaperFoldingTest1
router.post('/paperFoldingTest1', paperFoldingTest1Controller.createPaperFoldingTest1);
router.get('/paperFoldingTest1', paperFoldingTest1Controller.getAllPaperFoldingTest1);
router.get('/paperFoldingTest1/:id', paperFoldingTest1Controller.getPaperFoldingTest1ById);
router.put('/paperFoldingTest1/:id', paperFoldingTest1Controller.updatePaperFoldingTest1);
router.delete('/paperFoldingTest1/:id', paperFoldingTest1Controller.deletePaperFoldingTest1);

// Routes for PaperFoldingTest2
router.post('/paperFoldingTest2', paperFoldingTest2Controller.createPaperFoldingTest2);
router.get('/paperFoldingTest2', paperFoldingTest2Controller.getAllPaperFoldingTest2);
router.get('/paperFoldingTest2/:id', paperFoldingTest2Controller.getPaperFoldingTest2ById);
router.put('/paperFoldingTest2/:id', paperFoldingTest2Controller.updatePaperFoldingTest2);
router.delete('/paperFoldingTest2/:id', paperFoldingTest2Controller.deletePaperFoldingTest2);

module.exports = router;
