key = "4a758dd1aed04dc3950175920231609";
let loc = "Galle";
let suggesliBody = "";
//=============dark-light mode
colorMood();
function colorMood() {
    if (document.getElementById("img_light").style.display === "none") {
        document.getElementById("img_light").style.display = 'block';
        document.getElementById("img_dark").style.display = 'none';
    } else {
        document.getElementById("img_light").style.display = 'none';
        document.getElementById("img_dark").style.display = 'block';
    }
}

//===============================suggestion

function suggestion() {
    suggesliBody = "";
    let txt = document.getElementById("txtInput");
    let locSuggess = txt.value;
    if (locSuggess.length > 2) {
        fetch(` https://api.weatherapi.com/v1//search.json?key=${key}&q=${locSuggess}`)
            .then(res => res.json())
            .then(data => {
                data.forEach(cityName => {
                    suggesliBody += `<li >${cityName.name + " (" + cityName.country + ")"}</li>`
                })
                document.getElementById("suggess").innerHTML = suggesliBody;
            })


    } else {
        document.getElementById("suggess").innerHTML = suggesliBody;
    }
}

//=================================get weather data


getWeather();
function getWeather() {
    suggesliBody = "";
    document.getElementById("suggess").innerHTML = suggesliBody;
    setLocation();
    fetch(` https://api.weatherapi.com/v1//forecast.json?key=${key}&q=${loc}`)
        .then(res => res.json())
        .then(data => {
            tblBody = ` <tr>
                        <th>wind speed</th>
                        <td>${data.current.wind_kph} kph</td>
                    </tr>
                    <tr>
                        <th>wind degree</th>
                        <td>${data.current.wind_degree}</td>
                    </tr>
                    <tr>
                        <th>Pressure mb</th>
                        <td>${data.current.pressure_mb} </td>
                    </tr>
                    <tr>
                        <th>pressure in</th>
                        <td>${data.current.pressure_in}</td>
                    </tr>
                    <tr>
                        <th>precip mm</th>
                        <td>${data.current.precip_mm}</td>
                    </tr>
                     <tr>
                        <th>humidity</th>
                        <td>${data.current.humidity}</td>
                    </tr>
                    <tr>
                        <th>cloud</th>
                        <td>${data.current.cloud}</td>
                    </tr>
                    <tr>
                        <th>feelslike</th>
                        <td>${data.current.feelslike_c} c</td>
                    </tr>
                    <tr>
                        <th>gust</th>
                        <td>${data.current.gust_kph} kph</td>
                    </tr>
                    <tr>
                        <th>uv</th>
                        <td>${data.current.uv}</td>
                    </tr>`
            document.getElementById("weather_tbl").innerHTML = tblBody;
            document.getElementById("weatherLocation").innerText = data.location.name;
            document.getElementById("weatherCountry").innerHTML = `<img style="vertical-align: sub;" width="15px"  src="icon/countery.png" alt=""></img> ${data.location.country}`;
            document.getElementById("lastUpdated").innerText = " ~ " + data.current.last_updated + "  last updated";
            document.getElementById("txt_weather_condition").innerText = data.current.condition.text;
            document.getElementById("img_weather_condition").src = data.current.condition.icon;
            data.forecast.forecastday.forEach(element => {
                for (let i = 0; i < 24; i++) {
                    document.getElementById("day_" + (i + 1)).innerHTML = `<p id="txt_day_${i}" style="text-align: center; position: relative; top: -20px;font-weight: bold; ">${element.hour[i].time.substring(11)}</p>
                                                                   <img width="50px" id="img_day_${i}" style="position: relative; left: 24px; top: -35px;" src="${element.hour[i].condition.icon}" alt="">
                                                                   <p id="txt_day_${i}" style="text-align: center; position: relative; top: -75px;font-weight: bold; font-size: 25px;">${element.hour[i].temp_c} °C</p>`

                }
            });
            weekWeather();
        })
}
//-----------------------------set location
function setLocation() {
    if (document.getElementById("txtInput").value === "") {
        loc = "Galle";
    } else {
        loc = document.getElementById("txtInput").value;
    }
}
//-------------------------set local time
updateTime();
setInterval(updateTime, 1000);
function updateTime() {
    const tme = new Date();
    document.getElementById("Welcome_time").textContent = tme.toLocaleTimeString();
}

//===================================week weather
function weekWeather() {
    fetch(` https://api.weatherapi.com/v1//forecast.json?key=${key}&q=${loc}`)
        .then(res => res.json())
        .then
}
