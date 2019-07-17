import {DB} from "../lib/database"; //rocksdb database
import mongoose from "mongoose"; //mongodb database
import redis from "redis"; //redis database
import * as path from 'path'

enum StorageType {

    MEMORY,
    MONGODB,
    ROCKSDB,
    REDIS,
    FILE,
    SESSION

}

enum DataType {

    SYSTEM,
    USERDATA,
    TRANSACTION,
    REST

}

export class StorageFactory {

    private storageEncryptionKey: Buffer;
    private storageEncryptionType: string;

    private storageLocation: string;
    private decryptedData: Buffer;
    private encryptedData: Buffer;


    private storageType: StorageType;
    private dataType: DataType;

    private Storage;

    constructor(storageType: StorageType,
                dataType: DataType,
                storageEncryptionType: string,
                storageEncryptionKey: Buffer,
                storageLocation: string) {


    }


}

