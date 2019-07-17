import {Router} from 'express';
import {controllers} from "../../../controllers";

const routes = Router();

routes.post('/signup', controllers.signup.signupAction);

export default routes;