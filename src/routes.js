import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'henrique',
    email: 'henrique@teste.com',
    password_hash: '1233132',
  });

  res.json(user);
});

export default routes;
