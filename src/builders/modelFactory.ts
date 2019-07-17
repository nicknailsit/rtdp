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
