const API_KEY = 'd99e80d9bea2c1b6a9da4b65624989af';
const form = document.querySelector("form");
const search = document.querySelector("#search");           //id
const weather = document.querySelector("#weather");
const getweather=async(city)=>{
    weather.innerHTML=`<h2>Loading...</h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try{
        const response=await fetch(url);
        const data=await response.json()
        return ShowWeather(data)
        //console.log(data);
        
    }
    catch(error){
        weather.innerHTML=`<h2>Fetching Error...</h2>`
        
    }
}

const ShowWeather=(data)=>{
    if(data.cod==='404'){
        weather.innerHTML=`<h2>City is not found</h2>`
    }
        weather.innerHTML=`<div>
                <img src="https://openweathermap.org/img/wn/04n@2x.png">
            </div>
            <div>
                <h2>${data.main.temp}°</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
        </div>`
    
}

form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault()
    })