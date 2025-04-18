import express from 'express';
import { signup, signin } from '../controllers/authController.js';
import authenticateToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: `Welcome back, ${req.user.name}!` });
});

export default router;
