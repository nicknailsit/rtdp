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