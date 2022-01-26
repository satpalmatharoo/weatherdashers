var apiKey = "0d7986ede662de9f77df50487eb98a46 ";

var searchFormEl = document.querySelector("form");
var citySearchEl = document.querySelector("#city-selection");
// puts searched city into endpoint
function citySearch(event) {
    event.preventDefault();
    const searchedCity = citySearchEl.value;
    console.log("searchedCity" + searchedCity);
    // call api function that gets the end point 
    getApiEndpoint(searchedCity);
  }

//   creates api for the resquest but does not make the request
function getApiEndpoint(city) {
  var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  console.log("getApi function " + endpoint);
  console.log("this is the city in endpoint " +city)
  var htmlcity = document.getElementById("htmlCity")
  htmlcity.innerText = city;


//   initiates getData func that makes the request
  getData(endpoint);
}
// makes api request
function getData(request) {
 
  console.log("getdata function " + request);
  

  //request api info
  fetch(request).then(function (res) {
    if (res.ok) {
      res
        .json()

        .then(function (weatherData) {
            // use weather data in the populate ui function after req made. 
          populateUI(weatherData);
        });
    }
  });
}
// displays weather data to front end 
function populateUI(weatherData) {
   
    temp = weatherData.main.temp;
    humidity = weatherData.main.humidity;
    wind = weatherData.wind.speed;
    icon = weatherData.weather[0].icon;
    console.log("weatherData" + JSON.stringify(weatherData));
    console.log("temp" + temp);
    console.log( "humidity " +humidity);
    console.log("wind " + wind);
    console.log("icon " + icon);

// getting png for UI
var weatherIcon = "http://openweathermap.org/img/w/"+icon+".png"

    // getting html ele
    var tempRender = document.getElementById("temp");
    var humRender = document.getElementById("humidity");
    var windRender = document.getElementById("wind");
    var ConidtionsRender = document.getElementById("imgCon");
    var uvRender = document.getElementById("uv")

    // render
    tempRender.innerText = temp
    humRender.innerText = humidity
    windRender.innerText = wind
    ConidtionsRender.src = weatherIcon




    var lat = weatherData.coord.lat;
    var long = weatherData.coord.lon;
    console.log("I am lat " + lat);
    console.log("I am long " + long);
    // uses weatherdata lat and long to make 2nd request for week weather data
    getweekweather(lat, long);
}
// makes req with 2nd api for weekly weather data this req uses lat and long from first req
function getweekweather(lat, long) {
    console.log(lat + " i am get week weather lat");
    var apiTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;
    fetch(apiTwo).then(function (res) {
        if (res.ok) {
            res.json().then(function (weeklyData) {
                JSON.stringify(weeklyData);
                console.log("weekly weather data " + JSON.stringify(weeklyData));
                // populateWeeklyData(weeklyData);
            });
        }
    });
}

searchFormEl.addEventListener("submit", citySearch);






