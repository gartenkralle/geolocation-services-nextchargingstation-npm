# nextchargingstation

## Usage

```javascript
import { 
    getCollection, 
    getDetails 
} from '@geolocation-services/nextchargingstation-package'


var chargingStations = 
    await getCollection(47.81044, 50.0704, 8.43979, 12.08176, 9);

chargingStations.forEach(chargingStation => console.log(`
    Id: ${chargingStation.Id}
    Latitude: ${chargingStation.Latitude}
    Longitude: ${chargingStation.Longitude}
`));


var details = await getDetails(9044570);

details.forEach(detail => console.log(`
    Key: ${detail.Key}
    Value: ${detail.Value}
`));
```

## API in Action

[https://www.nextchargingstation.org](https://www.nextchargingstation.org)
