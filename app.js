'use strict';

import { 
    getCollectionCore, 
    getDetailsCore 
} from '@geolocation-services/core-package'

export var getCollection = async function (latMin, latMax, lonMin, lonMax, density) {
    return await getCollectionCore('https://www.nextchargingstation.org', '8083', latMin, latMax, lonMin, lonMax, density);
};

export var getDetails = async function (id) {
    return await getDetailsCore('https://www.nextchargingstation.org', '8083', id);
};
