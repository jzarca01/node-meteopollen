const MeteoPollen = require('./');
const pollen = new MeteoPollen({
    latitude: 48.85341,
    longitude: 2.3488
})

async function init() {
    try {
        const nearestCity = await pollen.getNearestCities();
        console.log(nearestCity);
        pollen.setPosition(nearestCity[0]);
        const forecast = await pollen.getForecast();
        console.log(JSON.stringify(forecast));
    }
    catch(err) {
        console.log(err);
    }
}

init()