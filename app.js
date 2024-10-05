
let key = "22b87b2303e84cbdaee92004243009";
let loc;
currentWeather();
function currentWeather(){
    setLocation();
    fetch(` https://api.weatherapi.com/v1/current.json?key=${key}&q=${loc}`)
    .then(res=>res.json())
    .then(obj=>{
        document.getElementById("lo_name").innerText = obj.location.name
        document.getElementById("lo_region").innerText = obj.location.region+" , "+obj.location.country
        document.getElementById("lo_img").src = obj.current.condition.icon;
        document.getElementById("lo_imgTxt").innerText = obj.current.condition.text;
        document.getElementById("lo_tempc").innerText = obj.current.temp_c+" °C   _________ "+obj.current.temp_f+" F";
        document.getElementById("tableC").innerHTML = `<tr>
                                                            <th>wind_mph</th>
                                                            <th>wind_kph</th>
                                                            <th>wind_degree</th>
                                                            <th>pressure_mb</th>
                                                            <th>pressure_in</th>
                                                            <th>humidity</th>
                                                            <th>cloud</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${obj.current.wind_mph}</td>
                                                            <td>${obj.current.wind_kph}</td>
                                                            <td>${obj.current.wind_degree}</td>
                                                            <td>${obj.current.pressure_mb}</td>
                                                            <td>${obj.current.pressure_in}</td>
                                                            <td>${obj.current.humidity}</td>
                                                            <td>${obj.current.cloud}</td>
                                                        </tr>`

    })
}
function setLocation(){
    if(document.getElementById("txtSearch").value ==""){
        loc = "Galle"
    }else{
        loc = document.getElementById("txtSearch").value;

    }
}

