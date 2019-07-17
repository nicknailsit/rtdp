import {createNewService} from "../builders/serviceFactory";

const appServiceConfig = {
    name: "appService",
    author: "nicolas cloutier",
    version: "1.0.0",
    core: true,
    license: "GPL 3.0",
    permanent: false,
    onDemand: true,
    dependents: ["express", "cors", "helmet"]
};

export default createNewService(appServiceConfig);
