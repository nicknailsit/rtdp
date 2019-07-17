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

import {loadServiceConfiguration} from "./serviceConfigurationFactory";
import {RunAsyncParallel} from "../lib/asyncRunners";

export class ServiceFactory {

    private name: string;
    private service;
    private deps;
    private loadedDeps = [];


    constructor(serviceConfig: object) {

        this.service = loadServiceConfiguration(serviceConfig);
        this.initialize();

    }

    public getDep(name) {

        console.log(this.loadedDeps["appService"]);

        return this.loadedDeps[name];
    }

    private initialize() {

        this.name = this.service.getName();
        this.deps = this.service.getDependents();
        console.log(`initializing service: ${this.name}...`);

        if (this.deps.length > 0) {

            console.log(`[Service: ${this.name}] initializing service dependencies...`);

            this.loadDependencies().then(result => {
                if (result === "done") {
                    console.log(`[Service: ${this.name}]  all dependencies imported`);
                }
            }).catch(err => console.error(err));


        }

    }

    private async loadDependencies() {


        let deplen = this.deps.length;


        const tasks = [];

        for (let i = 0; i < deplen; i++) {


            try {
                const serviceN = `${this.deps[i]}`;
                this.loadedDeps[serviceN] = require(this.deps[i]);


            } catch (error) {
                return error;
            }

        }

        return "done";

    }


}

export function createNewService(configuration: object) {


    return new ServiceFactory(configuration);

}