let inpcity=document.querySelector("input")
let search=document.querySelector("button");
inpcity.addEventListener("input",function(){
    if(inpcity.value ==""){
        document.querySelector("#cityName").innerHTML="--"
        document.querySelector("#temp").innerHTML="--°C"
        document.querySelector(".img").innerHTML=""
        document.querySelector("#aqiindex").innerHTML="--"
    }
})
search.addEventListener("click" ,function(){
    try{
        if(inpcity.value ==""){
         return alert("enter a city name")
        }
        let cityname= document.querySelector("#cityName").innerHTML=inpcity.value;
        return tempfinder(cityname)

    }catch(e){
        console.log(e)
    }
})

async function tempfinder(citys) {
    try{
        let city=citys.toLowerCase();
        console.log(city)
        let url=await fetch(`http://api.weatherapi.com/v1/current.json?key=8cd26eba5e6b45ca801174803262503&q=${city}&aqi=yes`)
        let resp=await url.json();
        document.querySelector("#temp").innerHTML=resp.current.temp_c+"°C"
        document.querySelector(".img").innerHTML=`<img src="${resp.current.condition.icon}"> `
        document.querySelector("#aqiindex").innerHTML="AQI pm2_5 level  " +resp.current.air_quality.pm2_5 + "µg/m³";

    }catch(error){
        console.log(error)
    }
}