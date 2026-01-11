import db from '../db/sqlite';
import { v4 as uuid } from 'uuid';
import { Book } from '../models/book.model';

export const getAllBooks = (): Book[] => {
  const response = db.prepare('SELECT * FROM books').all();
  return response.length > 0 ? response as Book[] : [];
};

export const getBookById = (id: string): Book | undefined => {
  const response = db.prepare('SELECT * FROM books WHERE id = ?').get(id);
  return response ? response as Book : undefined;
};

export const createBook = (data: Omit<Book, 'id'>): Book => {
  const book: Book = { id: uuid(), ...data };

  db.prepare(
    'INSERT INTO books (id, title, author, publishedYear) VALUES (?, ?, ?, ?)'
  ).run(book.id, book.title, book.author, book.publishedYear);

  return book;
};

export const updateBook = (
  id: string,
  data: Omit<Book, 'id'>
): boolean => {
  const result = db.prepare(
    'UPDATE books SET title=?, author=?, publishedYear=? WHERE id=?'
  ).run(data.title, data.author, data.publishedYear, id);

  return result.changes > 0;
};

export const deleteBook = (id: string): boolean => {
  const result = db.prepare('DELETE FROM books WHERE id=?').run(id);
  return result.changes > 0;
};
