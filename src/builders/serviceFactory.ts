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