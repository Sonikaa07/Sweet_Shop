const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/User');

beforeAll(async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sweet-shop-test';
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});

describe('Auth', () => {
  it('should register and login a user', async () => {
    const email = `t${Date.now()}@test.com`;
    const res = await request(app).post('/api/auth/register').send({ name: 'Test', email, password: 'secret1' });
    expect(res.statusCode).toBe(201);
    expect(res.body.token).toBeDefined();

    const login = await request(app).post('/api/auth/login').send({ email, password: 'secret1' });
    expect(login.statusCode).toBe(200);
    expect(login.body.token).toBeDefined();
  });
});
