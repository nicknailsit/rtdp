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

