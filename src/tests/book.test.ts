import request from 'supertest';
import app from '../app';

describe('GET /books', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/books');
    expect(res.status).toBe(200);
  });
});
