//=============dark-light mode
colorMood();
function colorMood(){
    if(document.getElementById("img_light").style.display ==="none"){
        document.getElementById("img_light").style.display='block'; 
        document.getElementById("img_dark").style.display='none';
    }else{
        document.getElementById("img_light").style.display='none';
        document.getElementById("img_dark").style.display='block';
    }
}

//=================================get weather data
key="4a758dd1aed04dc3950175920231609";
let loc = "Galle";
getWeather();
function getWeather(){
    setLocation();
    fetch(` https://api.weatherapi.com/v1//forecast.json?key=${key}&q=${loc}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
}
    //-----------------------------set location
function setLocation(){
    if(document.getElementById("txtInput").value === ""){
        loc = "Galle";
    }else{
        loc = document.getElementById("txtInput").value;
    }
}
    //-------------------------set local time
setInterval(updateTime,1000);
function updateTime(){
    const tme = new Date();
    document.getElementById("Welcome_time").textContent = tme.toLocaleTimeString();
}


