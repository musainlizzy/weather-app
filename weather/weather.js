const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: 'https://api.darksky.net/forecast/59fa9b5b1d4f66d219b705f48341b5aa/37.8267,-122.4233',
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
