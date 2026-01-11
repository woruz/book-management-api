import { Router } from 'express';
import multer from 'multer';
import {
  getBooks,
  getBook,
  addBook,
  editBook,
  removeBook,
  importBooks
} from '../controllers/book.controller';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getBooks);   
router.get('/:id', getBook);   
router.post('/', addBook);
router.put('/:id', editBook);
router.delete('/:id', removeBook);
router.post('/import', upload.single('file'), importBooks);

export default router;
