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
import * as fs from 'fs';


export enum PluginType {
    SYSTEM,
    PUBLIC,
    COMMUNITY,
    SERVER,
    OAUTH_APP
}

export class PluginBuilder {

    private pluginType: PluginType;
    private pluginTypeString;

    private pluginName: string;
    private pluginDependencies;
    private pluginConfigurationFile;
    private dirRoot = __dirname + "/plugins";

    private pluginConfigurationData;

    private pluginDirectory;
    private loadedDeps;

    constructor(pluginType: PluginType, pluginName: string) {

        this.pluginType = pluginType;
        this.setPluginTypeString();
        this.pluginName = pluginName;
        this.setPluginDirectory();

        this.pluginConfigurationFile = path.resolve(this.pluginDirectory + "/config.json");
        this.setConfigData().then(() => {


            this.pluginDependencies = this.pluginConfigurationData.dependencies;
            this.initDependencies().then((result) => {

                var self = this;

                if (result === "done") {
                    return self;
                }

            }).catch(err => console.error(err));


        }).catch(err => console.error(err));

    }

    public getDep(depName: string) {
        return this.loadedDeps[depName];
    }

    public getRoutes() {
        return require(this.pluginDirectory + "/routes");
    }

    public getMiddleware(mName: string) {
        return require(this.pluginDirectory + "/middlewares/" + mName);
    }

    public getModel(mmName: string) {
        return require(this.pluginDirectory + "/models/" + mmName);
    }

    private setPluginDirectory() {

        this.pluginDirectory = path.resolve(this.dirRoot + "/" + this.pluginTypeString.toLowerCase() + "/" + this.pluginName);

    }

    private setPluginTypeString() {

        switch (this.pluginType) {
            case 0: {
                this.pluginTypeString = "SYSTEM";
                return;
            }
            case 1: {
                this.pluginTypeString = "PUBLIC";
                return
            }
            case 2: {
                this.pluginTypeString = "COMMUNITY";
                return;
            }
            case 3: {
                this.pluginTypeString = "SERVER";
                return;
            }
            case 4: {
                this.pluginTypeString = "OAUTH_APP";
                return;
            }
        }

    }

    private async setConfigData() {

        const config = fs.readFileSync(this.pluginConfigurationFile, 'utf8').toString();
        const jsonConfig = JSON.parse(config);
        if (jsonConfig.name !== this.pluginName || jsonConfig.type !== this.pluginType) {
            throw Error(`[PLUGIN_SYSTEM::${this.pluginName}] invalid plugin configuration file!`)
        } else {
            this.pluginConfigurationData = jsonConfig;
        }

    }

    private async initDependencies() {

        const deplen = this.pluginDependencies.length;

        for (let i = 0; i < deplen; i++) {


            try {
                const serviceN = `${this.pluginDependencies[i]}`;
                this.loadedDeps[serviceN] = require(this.pluginDependencies[i]);


            } catch (error) {
                return error;
            }

        }

        return "done";

    }

}

export function createPlugin(pluginType: PluginType, pluginName: string) {
    return new PluginBuilder(pluginType, pluginName);
}