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

interface serviceConfigInterface {

    name: string;
    core: boolean;

    version?: string;
    author?: string;
    license?: string;
    permanent?: boolean;
    onDemand?: boolean;
    isStoppable?: boolean;
    dependents?: any;
    worker?: any;
    maxWorkers?: number;

    model?: object;
    dbFile?: string;

    listener?: object;
    sockets?: object;
    pubsub?: object;
    port?: string;
    host?: string;
    hosts?: [string];
    autoStart?: boolean;

    customRoutes?: [{}];

    logger?: object;


}

class ConfigFactory implements serviceConfigInterface {
    name: string = "";
    core: boolean = false;

    version?: string = "1.0.0";
    author?: string = "";
    license?: string = "";
    permanent?: boolean = false;
    onDemand?: boolean = false;
    isStoppable?: boolean = false;
    dependents?: any = {};
    worker?: any = {};
    maxWorkers?: number = 1;

    model?: object = {};
    dbFile?: string = "";

    listener?: object = {};
    sockets?: object = {};
    pubsub?: object = {};
    port?: string = "";
    host?: string = "";
    hosts?: [string] = [""];
    autoStart?: boolean = false;

    customRoutes?: any;

    logger?: object = {};


    constructor(config: object = {}) {

        this.parseCustomConfigObject(config);

    }

    parseCustomConfigObject(custom: object) {

        let keys = Object.keys(custom);
        let values = Object.values(custom);

        let keylen = keys.length;
        let self = this;

        for (let i = 0; i < keylen; i++) {

            if (typeof self[keys[i]] === 'undefined') {
                throw Error(`${keys[i]} configuration variable is invalid!`);
            }

            self[keys[i]] = values[i];


        }

    }

    getName() {
        return this.name;
    }

    getDependents() {
        return this.dependents;
    }


}

export function loadServiceConfiguration(config: object) {
    return new ConfigFactory(config);
}