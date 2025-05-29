const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { apiLimiter } = require('../middleware/rateLimiter');

// Public routes
router.get('/', apiLimiter, getPosts);
router.get('/:id', apiLimiter, getPost);
router.post('/', apiLimiter, createPost);

// Protected routes
router.use(protect);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router; 