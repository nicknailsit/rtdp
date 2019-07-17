import {createNewService} from "../builders/serviceFactory";


const jwtServiceConfig = {
    name: "jwtService",
    author: "nicolas cloutier",
    version: "1.0.0",
    core: true,
    license: "GPL 3.0",
    permanent: false,
    onDemand: true,
    dependents: ["jsonwebtoken", "jwt-decode", __dirname + "/lib/keygen"],
};

export default createNewService(jwtServiceConfig);
