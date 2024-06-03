// controllers/PaperFoldingTest1Controller.js

const PaperFoldingTest1 = require('../models/PaperFoldingTest1');

// Controller function to create a new PaperFoldingTest1
exports.createPaperFoldingTest1 = async (req, res) => {
    try {
        const { question_number, answer_inserted } = req.body;
        const newTest = new PaperFoldingTest1({
            question_number,
            answer_inserted
        });
        const savedTest = await newTest.save();
        res.status(201).json(savedTest);
    } catch (error) {
        res.status(400).json({ message: 'Error creating test entry', error: error.message });
    }
};

// Controller function to retrieve all PaperFoldingTest1
exports.getAllPaperFoldingTest1 = async (req, res) => {
    try {
        const paperFoldingTest1List = await PaperFoldingTest1.find();
        res.status(200).json(paperFoldingTest1List);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to retrieve a single PaperFoldingTest1 by ID
exports.getPaperFoldingTest1ById = async (req, res) => {
    try {
        const paperFoldingTest1 = await PaperFoldingTest1.findById(req.params.id);
        if (!paperFoldingTest1) {
            return res.status(404).json({ message: 'PaperFoldingTest1 not found' });
        }
        res.status(200).json(paperFoldingTest1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a PaperFoldingTest1 by ID
exports.updatePaperFoldingTest1 = async (req, res) => {
    try {
        const updatedPaperFoldingTest1 = await PaperFoldingTest1.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPaperFoldingTest1) {
            return res.status(404).json({ message: 'PaperFoldingTest1 not found' });
        }
        res.status(200).json(updatedPaperFoldingTest1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a PaperFoldingTest1 by ID
exports.deletePaperFoldingTest1 = async (req, res) => {
    try {
        const deletedPaperFoldingTest1 = await PaperFoldingTest1.findByIdAndDelete(req.params.id);
        if (!deletedPaperFoldingTest1) {
            return res.status(404).json({ message: 'PaperFoldingTest1 not found' });
        }
        res.status(200).json({ message: 'PaperFoldingTest1 deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};