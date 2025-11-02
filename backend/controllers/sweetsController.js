const { validationResult } = require('express-validator');
const Sweet = require('../models/Sweet');

const createSweet = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const sweet = new Sweet(req.body);
    await sweet.save();
    res.status(201).json(sweet);
  } catch (err) { next(err); }
};

const getAllSweets = async (req, res, next) => {
  try {
    const sweets = await Sweet.find().sort({ createdAt: -1 });
    res.json(sweets);
  } catch (err) { next(err); }
};

const searchSweets = async (req, res, next) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    const q = {};
    if (name) q.name = { $regex: name, $options: 'i' };
    if (category) q.category = { $regex: category, $options: 'i' };
    if (minPrice || maxPrice) q.price = {};
    if (minPrice) q.price.$gte = Number(minPrice);
    if (maxPrice) q.price.$lte = Number(maxPrice);

    const sweets = await Sweet.find(q);
    res.json(sweets);
  } catch (err) { next(err); }
};

const updateSweet = async (req, res, next) => {
  try {
    const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sweet) return res.status(404).json({ message: 'Not found' });
    res.json(sweet);
  } catch (err) { next(err); }
};

const deleteSweet = async (req, res, next) => {
  try {
    const sweet = await Sweet.findByIdAndDelete(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};

const purchaseSweet = async (req, res, next) => {
  try {
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Not found' });
    if (sweet.quantity <= 0) return res.status(400).json({ message: 'Out of stock' });
    sweet.quantity -= 1;
    await sweet.save();
    res.json(sweet);
  } catch (err) { next(err); }
};

const restockSweet = async (req, res, next) => {
  try {
    const { amount } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ message: 'Invalid amount' });
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Not found' });
    sweet.quantity += Number(amount);
    await sweet.save();
    res.json(sweet);
  } catch (err) { next(err); }
};

module.exports = { createSweet, getAllSweets, searchSweets, updateSweet, deleteSweet, purchaseSweet, restockSweet };
