import LoginController from "./auth/LoginController";
import SignupController from "./auth/SignupController";

export const controllers = {
    auth: new LoginController(),
    signup: new SignupController(),
};