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

import {createNewService} from "../builders/serviceFactory";


const jwtServiceConfig = {
    name: "jwtService",
    author: "nicolas cloutier",
    version: "1.0.0",
    core: true,
    license: "GPL 3.0",
    permanent: false,
    onDemand: true,
    dependents: ["jsonwebtoken", "jwt-decode", __dirname + "/lib/keygen"],
};

export default createNewService(jwtServiceConfig);
