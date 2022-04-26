const axios = require('axios'); 
const FootBoolScrap = require('./RobotFutbool.js');



(async () => {
console.log('start');
const footBoolScrap = new FootBoolScrap();
console.log('start');
await footBoolScrap.start();
})();
// curl -X GET http://api.football-data.org/v2/competitions/
// Get this requistion use axios
// curl -X GET http://api.football-data.org/v2/competitions/2021/standings
// Get this requistion use axios

