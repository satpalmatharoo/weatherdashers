var apiKey= "0d7986ede662de9f77df50487eb98a46";
var workingapikey ='https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=0d7986ede662de9f77df50487eb98a46'
//url endpoint for city
function getApiEndpoint(city) {
    
    var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    return endpoint;
}   

// function to test api is working
function testData(request) {
    request = workingapikey;
    console.log( request)

//request api info
    fetch(request).then(function (res)
{
    if (res.ok) { 
    res
    .json()
        // console.log(test)
        .then(function (weatherData) {
            DataTest(weatherData);
        })
        
        
    } 
})

function DataTest(weatherData) {
    temp = weatherData.main.temp;
    console.log('big pooopy weather scum' + temp)
}


    
    S
} 

testData();

//make request
// function makeRequest(endpoint) {
//     return fetch(endpoint).then(function (res){
//         return res.json();
//     });
// }


// var city = "Birmingham";

// var endpoint = generateEndpoint(city);

// makeRequest(endpoint).then(function(weatherData){

// })