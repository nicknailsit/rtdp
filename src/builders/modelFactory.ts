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

import {DB} from "../lib/database"; //rocksdb database
import mongoose from "mongoose"; //mongodb database
import redis from "redis"; //redis database
import * as path from 'path'

export class ModelFactory {

    private modelName: string;
    private modelFile: string;


    private Model;
    private database;

    constructor(dbType: string, modelName: string) {


        this.modelName = modelName;
        this.modelFile = path.resolve(__dirname + `/models/${dbType}/${this.modelName}Model`);

        if (typeof this.database === 'undefined') {
            this.loadDatabase(dbType).then((db) => {
                this.loadModel().then((model) => {
                    this.Model = model;
                }).catch(err => console.error(err));
            }).catch(err => console.error(err));
        } else {
            this.loadModel().then((model) => {
                this.Model = model;
            }).catch(err => console.error(err));
        }


    }

    public getModel() {

        return this.Model();

    }

    private async loadDatabase(dbType) {

        switch (dbType) {
            case "rocksdb":
                this.database = DB;
                return;
            case "mongodb":
                this.database = mongoose.connect();
                return;
            case "redis":
                this.database = redis;
                return;
            default:
                return;
        }


    }

    private async loadModel() {

        return require(this.modelFile);

    }


}

export function createModel(dbType, modelName) {
    return new ModelFactory(dbType, modelName);
}
