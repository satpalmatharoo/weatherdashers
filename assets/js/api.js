var apiKey= "0d7986ede662de9f77df50487eb98a46";

//url endpoint for city
function getApiEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
}   

//
function makeRequest(endpoint) {
    return fetch(endpoint).then(function (res){
        return res.json();
    });
}