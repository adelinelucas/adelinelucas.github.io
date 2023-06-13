const weatherInput = document.getElementById('weather-search');
const weatherBtn = document.getElementById('weather-search-btn'); 
const weaterEl = document.getElementById('result');
let temperatureInfo ;
let meteoInfo ;
let humidityInfo;
let city ;
let weatherIcon;

weatherBtn.addEventListener('click', ()=>{
    console.log('click')
    let searchedCity = weatherInput.value; 
    console.log(searchedCity);
    getWeatherInfo(searchedCity);
})

weatherInput.addEventListener('keyup', (e)=>{
    if (e.key === 'Enter') {
        getWeatherInfo(e.target.value);
    }
})


const getWeatherInfo = async(cityValue) =>{
    try{
        const APIKEY = '9d14fab5293af26cf8dc10b7ff26e891';
        let coordinates = await getCoordinate(cityValue);
        const lattitude = await coordinates[0].lat;
        const longitude = coordinates[0].lon;
        const lang = "FR";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${APIKEY}&lang=${lang}&units=metric`);
        const jsonData = await response.json();
        city = jsonData.name;
        temperatureInfo = jsonData.main.temp + '°C';
        meteoInfo =  jsonData.weather[0].description;
        humidityInfo= jsonData.main.humidity + '%';
        weatherIcon = jsonData.weather[0].icon;
        appendHTMLContent(city,temperatureInfo,meteoInfo,humidityInfo, weatherIcon);
    }catch(err){
        weaterEl.innerHTML = `Une erreur est survenue nous n'avons pas trouvé de résultat pour votre recherche 😶`;
    }
    
}

const getCoordinate = async(city) =>{
    const APIKEY = '9d14fab5293af26cf8dc10b7ff26e891';
    let data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},FR&limit=1&appid=${APIKEY}`)
    const jsonData = await data.json();
    return jsonData;
}

const appendHTMLContent = (city,temperatureInfo,meteoInfo,humidityInfo, weatherIcon ) =>{
    let htmlContent = `
    <div class="card flex flex-row p-4">
        <img src="../assets/dinometeo.png" class="pr-2" alt="présentation des résultats de recherche" width="200px" >
        <div class="card-body">
            <h5 class="card-title">${city}</h5>
            <p class="card-text d-flex align-items-center" id="temperature-info"><span>Température : </span><i class="bi bi-thermometer-half"></i> ${temperatureInfo}</p>
            <p class="card-text d-flex align-items-center" id="meteo-info"><span>Météo : </span><img id="wicon" src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather icon"> ${meteoInfo} </p>
            <p class="card-text d-flex align-items-center" id="humidity-info"><span>Humidité : <i class="bi bi-moisture"></i></span>${humidityInfo}</p>
        </div>
    </div>
    `
    weaterEl.innerHTML = htmlContent;
}