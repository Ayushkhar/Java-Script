const apikey = "0573ce83b666f974cf6931478d429500";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let pkg = await response.json();
    // console.log(pkg);
    document.querySelector(".city").innerHTML=pkg.name;
    document.querySelector(".temp").innerHTML=pkg.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = pkg.main.humidity + "%"
    document.querySelector(".wind").innerHTML =pkg.wind.speed + "km/hr"

    
}
const box = document.getElementById("567")

const searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click",function(e){
    e.preventDefault();
    checkweather(box.value);
})
box.addEventListener("keydown",function(e){
    // console.log(box.value)
    if(e.key == "Enter"){
        checkweather(box.value);
    }
})

