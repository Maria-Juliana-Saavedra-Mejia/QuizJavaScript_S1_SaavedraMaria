function partesuperior(){
    let ciudad = "Floridablanca";
    let codigo = "ddd71d032c0b41bdabd115758252804";
    let info = `http://api.weatherapi.com/v1/current.json?key=${codigo}&q=${ciudad}=es&days=14`;
    let clima = new XMLHttpRequest();
    const imagenes = document.getElementById("Seccion1__ParteSuperior--api");
    
    clima.open("GET", info, true);
    clima.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText); 

            imagenes.innerHTML = `
                <p class="location">${response.location.name}, ${response.location.country}</p>
                <p class="KindOfWeather">${response.current.condition.text}</p>
                <p class="date">${response.location.localtime}</p>
                <img class="Image1" src="${response.current.condition.icon}"/>
                <p class="temperature">${response.current.temp_c} º</p>
                <p class="temperatureSensation">Feels like ${response.current.feelslike_c} º</p>
                <p class="windspeed">${response.current.wind_kph}m/h</p>
                <p class="RainChance">${response.current.dewpoint_c}%</p>
                <p class="Presuress">${response.current.pressure_mb} hpa</p>
                <p class="UVIndex">${response.current.uv} º</p>
            `;
            console.log(response.location.name);
        }
    }
    clima.send();
}

partesuperior();

function partetabla(){
    let ciudad = "Floridablanca";
    let codigo = "ddd71d032c0b41bdabd115758252804";
    let info = `http://api.weatherapi.com/v1/current.json?key=${codigo}&q=${ciudad}=es&days=14`;
    let clima = new XMLHttpRequest();
    const imagenes = document.getElementById("Seccion1__Cuadricula--api");
    
    clima.open("GET", info, true);
    clima.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);  
            imagenes.innerHTML = `
                <p class="windspeed">${response.current.wind_kph}m/h</p>
                <p class="RainChance">${response.current.dewpoint_c}%</p>
                <p class="Presuress">${response.current.pressure_mb} hpa</p>
                <p class="UVIndex">${response.current.uv}</p>
            `;
            console.log(response.location.name);
        }
    }
    clima.send();
}

partetabla();

function sun(){
    let ciudad = "Floridablanca";
    let codigo = "ddd71d032c0b41bdabd115758252804";
    let info = `https://api.weatherapi.com/v1/forecast.json?key=${codigo}&q=${ciudad}&lang=es&days=14`
    let clima = new XMLHttpRequest();
    const imagenes = document.getElementById("Seccion1__sun--api");
    
    clima.open("GET", info, true);
    clima.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);  
            imagenes.innerHTML = `
                <p class="sunset">${response.forecast.forecastday[0].astro.sunset}</p>
                <p class="sunrise">${response.forecast.forecastday[0].astro.sunrise}</p>
                <p class="hoursrise">${response.current.pressure_mb} hpa</p>
                <p class="hoursset">${response.current.uv}</p>
            `;
            console.log(response.location.name);
        }
    }
    clima.send();
}

sun();