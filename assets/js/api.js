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
  var htmlcity1 = document.getElementById("htmlCity1")
  htmlcity.innerText = city;
  htmlcity1.innerText = city;


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
    var ConditionsRender = document.getElementById("imgCon");
    

    // render
    tempRender.innerText = temp
    humRender.innerText = humidity
    windRender.innerText = wind
    ConditionsRender.src = weatherIcon




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
   console.log('i am api2 ' + apiTwo)
    fetch(apiTwo).then(function (res) {
        if (res.ok) {
            res.json().then(function (weeklyData) {
                JSON.stringify(weeklyData);
                console.log("weekly weather data " + JSON.stringify(weeklyData));
                console.log('uv index ' + weeklyData.current.uvi)
                const uvi =  weeklyData.current.uvi
                var uvRender = document.getElementById("uv")
                uvRender.innerText = uvi 
                if (uvi <2 ){
                  document.getElementById("uv").style.color ="green";
                } else {
                  document.getElementById("uv").style.color ="red";
                }
                populateWeeklyData(weeklyData);
            });
        }
    });
}

function populateWeeklyData(weeklyData){
 

const days = weeklyData.daily

console.log('days ' +days)
const onlyFive = days.slice(1,6);
console.log('only five ' +JSON.stringify(onlyFive))


for (let i = 0; i < onlyFive.length; i++) {
  console.log(onlyFive[i])
  var temp = onlyFive[i].temp.day
  console.log('temp ' + temp)
  
  var windspeed = onlyFive[i].wind_speed
  console.log('windspeed ' + windspeed)
  
  var humidity = onlyFive[i].humidity
  console.log('humidity ' + humidity)
  
  var icon = onlyFive[i].weather[0].icon
  console.log('icon ' +icon)
  var dt = onlyFive[i].dt
  console.log('dt ' +dt)

  
  if ( i === 0){
    // assign
    var tempRender = document.getElementById("temp1");
    var windRedner = document.getElementById("wind1")
    var humRender = document.getElementById("humidity1");
    var IconRender = document.getElementById("imgCon1") 
    var weatherIcon = "http://openweathermap.org/img/w/"+icon+".png"
    var DateRender = document.getElementById("date1")
    
    var date = moment.unix(dt).format("DD/MM/YY");
    
    
    // render
    DateRender.innerText = date
    IconRender.src = weatherIcon
    windRedner.innerText = windspeed
humRender.innerText = humidity
tempRender.innerText = temp
    
  }
  if ( i === 1){
    // assign
    var tempRender = document.getElementById("temp2");
    var windRedner = document.getElementById("wind2")
    var humRender = document.getElementById("humidity2");
    var IconRender = document.getElementById("imgCon2") 
    var weatherIcon = "http://openweathermap.org/img/w/"+icon+".png"
    var DateRender = document.getElementById("date2")
    
    var date = moment.unix(dt).format("DD/MM/YY");
    
    
    // render
    DateRender.innerText = date
    
    // render
    IconRender.src = weatherIcon
    windRedner.innerText = windspeed
humRender.innerText = humidity
tempRender.innerText = temp
    
  }
  if ( i === 2){
    // assign
    var tempRender = document.getElementById("temp3");
    var windRedner = document.getElementById("wind3")
    var humRender = document.getElementById("humidity3");
    var IconRender = document.getElementById("imgCon3") 
    var weatherIcon = "http://openweathermap.org/img/w/"+icon+".png"
    var DateRender = document.getElementById("date3")
    
    var date = moment.unix(dt).format("DD/MM/YY");
    
    
    // render
    DateRender.innerText = date
    
    // render
    IconRender.src = weatherIcon
    windRedner.innerText = windspeed
humRender.innerText = humidity
tempRender.innerText = temp
    
  }
  if ( i === 3){
    // assign
    var tempRender = document.getElementById("temp4");
    var windRedner = document.getElementById("wind4")
    var humRender = document.getElementById("humidity4");
    var IconRender = document.getElementById("imgCon4") 
    var weatherIcon = "http://openweathermap.org/img/w/"+icon+".png"
    var DateRender = document.getElementById("date4")
    
    var date = moment.unix(dt).format("DD/MM/YY");
    
    
    // render
    DateRender.innerText = date
    
    // render
    IconRender.src = weatherIcon
    windRedner.innerText = windspeed
humRender.innerText = humidity
tempRender.innerText = temp
    
  }
  if ( i === 4){
    // assign
    var tempRender = document.getElementById("temp5");
    var windRedner = document.getElementById("wind5")
    var humRender = document.getElementById("humidity5");
    var IconRender = document.getElementById("imgCon5") 
    var weatherIcon = "http://openweathermap.org/img/w/"+icon+".png"
    var DateRender = document.getElementById("date5")
    
    var date = moment.unix(dt).format("DD/MM/YY");
    
    
    // render
    DateRender.innerText = date
    
    // render
    IconRender.src = weatherIcon
    windRedner.innerText = windspeed
humRender.innerText = humidity
tempRender.innerText = temp
    
  }
}

}

searchFormEl.addEventListener("submit", citySearch);






