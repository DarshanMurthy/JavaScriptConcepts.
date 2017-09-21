/* In the script I am writing simple method for a request object */

var request = require('request');
url='https://googl.com'
var temp = request(url, function(error,response,body){
    if(error){
        console.log(error)
    }
    else{
        console.log(response)
    }
})

