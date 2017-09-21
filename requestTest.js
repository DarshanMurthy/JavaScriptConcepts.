/* In the script I am writing simple method for a request object */
// Simplest HTTP request client https://github.com/request/request


var request = require('request');
var fs = require('fs')
url='https://google.com'
var temp = request(url, function(error,response,body){
    if(error){
        console.log(error)
    }
    else{
        console.log(response.statusCode)
        console.log(response)
        console.log(body)
    }
})

request('http://www.pngmart.com/files/2/Mario-Transparent-Background.png').pipe(fs.createWriteStream('doodle.png'))

