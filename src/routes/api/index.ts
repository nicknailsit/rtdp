import {Router} from 'express';
import AuthRoutes from './auth';
import UserRoutes from './users';

const routes = Router();
routes.use('/auth', AuthRoutes);
routes.use('/user', UserRoutes);

export default routes;