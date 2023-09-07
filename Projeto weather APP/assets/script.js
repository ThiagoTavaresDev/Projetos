const apiKey = '00d4e9c35872a23b4bd83c157269a0f9'
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.search .searchInput')
const searchButton = document.querySelector('.search .icon')
const weatherImg = document.querySelector('.main-section .weather-img')

async function checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".main-section").style.display = "none";
        document.querySelector('.coll-footer').style.display = 'none'
    }
        else {
    var data = await response.json()

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.degree').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.speed-wind').innerHTML = data.wind.speed + 'Km/h'
    document.querySelector(".error").style.display = "none";
    document.querySelector(".main-section").style.display = "flex";
    document.querySelector('.coll-footer').style.display = 'flex'
    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "assets/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "assets/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "assets/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "assets/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "assets/images/mist.png";
    }
}
}
searchButton.addEventListener('click', () =>{
    checkWeather(searchInput.value)


})