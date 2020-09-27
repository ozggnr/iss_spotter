// const { fetchMyIP , fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  
  for (let times of passTimes){
    const datetime = new Date(0);
    datetime.setUTCSeconds(times.risetime);
    console.log(`Next pass at ${datetime} for ${times.duration} seconds!`);
  }
});





