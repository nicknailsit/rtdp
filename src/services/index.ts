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