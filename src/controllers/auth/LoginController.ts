import Controller from '../Controller';

class LoginController extends Controller {

    constructor() {
        super('login', '1.0.0', false, false);
    }

    public loginAction(req, res) {

        const {email, password} = req.body;
        res.send();

    }

    public logoutAction(req, res) {

        const email = req.body.email;

    }


}

export default LoginController;