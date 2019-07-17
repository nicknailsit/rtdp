import Controller from '../Controller';
import {Model} from "../../models";

class SignupController extends Controller {

    constructor() {
        super('login', process.env.Version, false, false);
    }

    public signupAction(req, res) {

        Model.user.create(req.body.user).then(user => res.send(user)).catch(err => console.error(err));

    }


}

export default SignupController;