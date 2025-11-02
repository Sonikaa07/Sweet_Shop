const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const sweetsController = require('../controllers/sweetsController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', sweetsController.getAllSweets);
router.get('/search', sweetsController.searchSweets);

router.post('/', auth, adminOnly, [
  body('name').notEmpty(),
  body('category').notEmpty(),
  body('price').isFloat({ min: 0 }),
  body('quantity').isInt({ min: 0 })
], sweetsController.createSweet);

router.put('/:id', auth, adminOnly, sweetsController.updateSweet);
router.delete('/:id', auth, adminOnly, sweetsController.deleteSweet);

router.post('/:id/purchase', auth, sweetsController.purchaseSweet);
router.post('/:id/restock', auth, adminOnly, sweetsController.restockSweet);

module.exports = router;
