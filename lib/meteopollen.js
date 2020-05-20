const axios = require("axios");

class MeteoPollen {
  constructor({ latitude, longitude }) {
    this.request = axios.create({
      baseURL: "http://api.meteopollen.com",
    });
    this.position = null;
    this.setPosition({ latitude, longitude });
  }

  setPosition({ latitude, longitude }) {
    this.position = { latitude, longitude };
  }

  async getNearestCities() {
      try {
        const response = await this.request({
            method: 'GET',
            url: '/cities/nearest',
            params: {
                lat: this.position.latitude,
                lon: this.position.longitude
            }
        })
        return response.data;
      }
      catch(err) {
          console.log("error with getNearestCities", err);
      }
  }

  async getForecast() {
    try {
        const response = await this.request({
            method: 'GET',
            url: '/bespoke/pollen/forecast/',
            params: {
                lat: this.position.latitude,
                lon: this.position.longitude
            }
        })
        return response.data;
      }
      catch(err) {
          console.log("error with getForecast", err);
      }
  }
}

module.exports = MeteoPollen;