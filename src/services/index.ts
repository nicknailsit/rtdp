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

import * as path from 'path';

class CoreServicesLoader {

    private loadedServices = [];
    private notloadedService = [];


    constructor(services) {

        this.notloadedService = services;

        this.load()


    }

    public getService(name: string) {

        let self = this;


        if (typeof self.loadedServices[name] === 'undefined') {
            throw Error(`[ServiceLoader Error] ${name} is undefined or does not exists.`);
        }

        return self.loadedServices[name];

    }

    private load() {


        for (let i = 0; i < this.notloadedService.length; i++) {

            let serviceName = `${this.notloadedService[i]}`;
            let module = path.resolve(__dirname + "/" + serviceName);


            try {
                this.loadedServices[serviceName] = require(module);
            } catch (error) {
                console.log(error);
                return error;
            }

        }

    }


}

const coreServices =

    [
        'appService'
    ]

;

const CS = new CoreServicesLoader(coreServices);


export {CS};