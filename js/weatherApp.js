const searchBox =  document.querySelector("#search-box")
const input = document.querySelector("#input-box")
let block =  document.querySelector(".weather-box")

const key = "3ef1a357aa8f3e8bc6905e9283fc02e2"
const ulr = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


async function weatherApp(city){
    let response = await fetch(ulr + city + `&appid=${key}`)
    let data = await response.json()
    
    document.querySelector("#city").innerHTML = data.name
    document.querySelector("#temp").innerHTML = data.main.temp
    let weather = document.querySelector("#weather").innerHTML = data.weather[0].main
    let img = document.querySelector("#img")
    document.querySelector("#country").innerHTML = data.sys.country
    document.querySelector("#min").innerHTML = data.main.temp_min + "temp_min"
    document.querySelector("#max").innerHTML = data.main.temp_max + "temp_max"
    document.querySelector("#pars").innerHTML = data.wind.speed + "speed"
    document.querySelector("#humidity").innerHTML = data.main.humidity + "humidity"
}

        
searchBox.addEventListener("click",()=>{


    block.style.display= "block"

    weatherApp(input.value)


})
