const curdService = require('../services/curd.service');

const curdRouter = require('express').Router();

curdRouter.route('/').get(async (req, res) => {
  try {
    const allCurds = await curdService.getAllCurds();
    return res.status(200).json(allCurds);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

curdRouter.route('/:curdId').get(async (req, res) => {
  try {
    const { curdId } = req.params;
    if (!curdId || Number.isNaN(Number(curdId))) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    const currentCurd = await curdService.getOneCurd(curdId);
    if (!currentCurd) {
      return res.status(404).json({ message: 'Curd not found' });
    }
    return res.status(200).json(currentCurd);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

curdRouter.route('/').post(async (req, res) => {
  try {
    const { title, price, image, rating } = req.body;
    if (!title || !price || !image || !rating) {
      return res.status(404).json({ message: 'Invalid body' });
    }
    const newCurd = await curdService.addNewCurd({ title, price, image, rating });
    if (!newCurd) {
      throw new Error('Curd not found');
    }
    return res.status(201).json(newCurd);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

curdRouter.route('/:curdId').patch(async (req, res) => {
  
  try {
    const { title, price, image, rating } = req.body;
    if (!title || !price || !image || !rating) {
      return res.status(404).json({ message: 'Invalid body' });
    }
    const { curdId } = req.params;
    
    if (!curdId || Number.isNaN(Number(curdId))) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    await curdService.editOneCurd(curdId, { title, price, image, rating });
    const editedCurd = await curdService.getOneCurd(curdId);
    if (!editedCurd) {
      throw new Error('Curd not found');
    }
    return res.status(201).json(editedCurd);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

curdRouter.route('/:curdId').delete(async (req, res) => {
  try {
    const { curdId } = req.params;
    if (!curdId || Number.isNaN(Number(curdId))) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    curdService.deleteCurd(curdId);
    return res.status(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = curdRouter;
