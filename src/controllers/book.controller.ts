import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from '../services/book.service';
import { parseCSV } from '../utils/csvParser';

export const getBooks = (_: Request, res: Response) => {
  res.json(getAllBooks());
};

export const getBook = (req: Request, res: Response) => {
  const book = getBookById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

export const addBook = (req: Request, res: Response) => {
  const book = createBook(req.body);
  res.status(201).json(book);     
};  

export const editBook = (req: Request, res: Response) => {
  const updated = updateBook(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'Book updated' });
};

export const removeBook = (req: Request, res: Response) => {
  const deleted = deleteBook(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'Book deleted' });
};

export const importBooks = (req: any, res: Response) => {
  const file = fs.readFileSync(req.file.path, 'utf-8');
  const { valid, errors } = parseCSV(file);

  valid.forEach(createBook);

  res.json({
    added: valid.length,
    errors
  });
};
