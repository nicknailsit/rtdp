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