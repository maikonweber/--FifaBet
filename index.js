const axios = require('axios'); 

// curl -X GET http://api.football-data.org/v2/competitions/
// Get this requistion use axios
// curl -X GET http://api.football-data.org/v2/competitions/2021/standings
// Get this requistion use axios

axios.get('http://api.football-data.org/v1/teams/')
.then(function (response) {
    // handle success
    console.log(response.data);
    }
)
.catch(function (error) {
    // handle error
    console.log(error);
}
);

