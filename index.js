const axios = require('axios'); 
const FootBoolScrap = require('./RobotFutbool');

const url = 'https://check.torproject.org/';

const obj = new FootBoolScrap('maikonwdc', 'ma128sio4', url);
obj.start().then(result => {
    console.log(result);
});


// curl -X GET http://api.football-data.org/v2/competitions/
// Get this requistion use axios
// curl -X GET http://api.football-data.org/v2/competitions/2021/standings
// Get this requistion use axios

