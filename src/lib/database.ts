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

