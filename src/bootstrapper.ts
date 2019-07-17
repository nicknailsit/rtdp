import 'dotenv/config';
import {CS as services} from './services';

const appPort = process.env.PORT;


class App {


    entityModels;
    router;
    app;
    appService;

    constructor() {


        this.appService = services.getService('appService').default;
        this.app = this.appService.getDep('express')();

    }

    initSockets() {

        //todo create socket.io service

    }

    run() {
        this.initApp().then(() => {
            this.app.listen(appPort, () => {
                console.log('[Swaggit App RTDP] Core app is listening on ' + appPort);
            })
        }).catch(err => console.error(err));

    }

    private async initApp() {

        this.app.use(this.appService.getDep('cors'));
        this.app.use(this.appService.getDep('helmet'));
        this.router = this.app.Router;

    }


}

export default App;