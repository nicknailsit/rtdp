import level from 'level-rocksdb';

import {DATABASE_DIR} from '../config/constants';

export const DB = level(DATABASE_DIR + "swaggit.db");

export function setData(key: string, data: string) {

    DB.put(key, data).then(() => {
        return DB.get(key)
    }).catch(err => console.error(err));

}

export function getData(key: string, callback) {

    DB.get(key).then(function (err, value) {
        if (err) {
            callback(err, null);
        } else if (value) {
            callback(null, value);
        } else {
            callback(null, null);
        }
    })

}

