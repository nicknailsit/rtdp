/*
 *
 *  * Copyright (c) 2019. The Swaggit Network (www.swaggit.net)
 *  * Copyright (c) 2019. Nicolas Cloutier (nicknailers69@gmail.com)
 *  *
 *  *  This program is free software: you can redistribute it and/or modify
 *  *     it under the terms of the GNU General Public License as published by
 *  *     the Free Software Foundation, either version 3 of the License, or
 *  *     (at your option) any later version.
 *  *
 *  *     This program is distributed in the hope that it will be useful,
 *  *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  *     GNU General Public License for more details.
 *  *
 *  *     You should have received a copy of the GNU General Public License
 *  *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

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