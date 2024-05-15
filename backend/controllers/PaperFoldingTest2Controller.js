// controllers/PaperFoldingTest2Controller.js

const PaperFoldingTest2 = require('../models/PaperFoldingTest2');

// Controller function to create a new PaperFoldingTest2
exports.createPaperFoldingTest2 = async (req, res) => {
    try {
        const newPaperFoldingTest2 = await PaperFoldingTest2.create(req.body);
        res.status(201).json(newPaperFoldingTest2);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

// Controller function to retrieve all PaperFoldingTest2
exports.getAllPaperFoldingTest2 = async (req, res) => {
    try {
        const paperFoldingTest2List = await PaperFoldingTest2.find();
        res.status(200).json(paperFoldingTest2List);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to retrieve a single PaperFoldingTest2 by ID
exports.getPaperFoldingTest2ById = async (req, res) => {
    try {
        const paperFoldingTest2 = await PaperFoldingTest2.findById(req.params.id);
        if (!paperFoldingTest2) {
            return res.status(404).json({ message: 'PaperFoldingTest2 not found' });
        }
        res.status(200).json(paperFoldingTest2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a PaperFoldingTest2 by ID
exports.updatePaperFoldingTest2 = async (req, res) => {
    try {
        const updatedPaperFoldingTest2 = await PaperFoldingTest2.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPaperFoldingTest2) {
            return res.status(404).json({ message: 'PaperFoldingTest2 not found' });
        }
        res.status(200).json(updatedPaperFoldingTest2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a PaperFoldingTest2 by ID
exports.deletePaperFoldingTest2 = async (req, res) => {
    try {
        const deletedPaperFoldingTest2 = await PaperFoldingTest2.findByIdAndDelete(req.params.id);
        if (!deletedPaperFoldingTest2) {
            return res.status(404).json({ message: 'PaperFoldingTest2 not found' });
        }
        res.status(200).json({ message: 'PaperFoldingTest2 deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};