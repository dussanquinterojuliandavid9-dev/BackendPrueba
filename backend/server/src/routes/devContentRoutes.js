import { Router } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import {
  listContents,
  createContent,
  updateContent,
  deleteContent
} from '../controllers/contentController.js';

const router = Router();

router.get('/', asyncHandler(listContents));
router.post('/', asyncHandler(createContent));
router.patch('/:id', asyncHandler(updateContent));
router.delete('/:id', asyncHandler(deleteContent));

export default router;