const request = require('request-promise-native');
//catch the ip from the url as body object
const fetchMyIP = function(callback) {
  return request("https://api.ipify.org?format=json")
};
//parse the ip from json as string 
const fetchCoordsByIP1 = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
};
const fetchISSFlyOverTimes1 = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
};
const nextISSTimesForMyLocation = function() {
  return fetchMyIP() 
    .then(fetchCoordsByIP1)
    .then(fetchISSFlyOverTimes1)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
}

 
module.exports = { nextISSTimesForMyLocation };
