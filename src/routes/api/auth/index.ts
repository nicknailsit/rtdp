import {Router} from 'express';
import {controllers} from "../../../controllers";

const routes = Router();

routes.post('/login', controllers.auth.loginAction);
routes.post('/logout', controllers.auth.logoutAction);

export default routes;