/**
 *   @author Nicolas Cloutier
 *
 *   @description Swaggit Network API Global Controller Class
 *
 *   @class Controller
 *
 *
 *          @param name
 *          @param version
 *          @param hasRendering
 *          @param isProtected
 *
 *   @implements controller interface
 *
 *
 *
 *   @example
 *   class MyClass extends Controller {

 *       constructor() {
 *            super("nameofmyclass", ${process.env.Version}, false, false) // if no rendering and is not protected else it would be false, true or true, true
 *        }
 *
 *
 *
 *   }
 *
 **/


interface controller {
    name: string;
    version: string;
    action: string;
    hasRendering: boolean;
    isProtected: boolean;
}

class Controller implements controller {
    name: string;
    version: string;
    action: string;
    hasRendering: boolean;
    isProtected: boolean;

    constructor(name: string, version: string, hasRendering: boolean, isProtected: boolean) {

        this.name = name;
        this.version = version;
        this.hasRendering = hasRendering;
        this.isProtected = isProtected;
        this.load();

    }

    public load() {
        if (this.isProtected) {

            //trigger protection middleware

        } else {
            return;
        }
    }


}

export default Controller;