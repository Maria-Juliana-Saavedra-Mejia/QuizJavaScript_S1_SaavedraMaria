function partesuperior(){
    let ciudad = "Floridablanca";
    let codigo = "ddd71d032c0b41bdabd115758252804";
    let info = `http://api.weatherapi.com/v1/current.json?key=${codigo}&q=${ciudad}`;
    let clima = new XMLHttpRequest();
    const imagenes = document.getElementById("Seccion1__ParteSuperior--api");
    
    clima.open("GET", info, true);
    clima.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);  
            imagenes.innerHTML = `
                <p class="location">${response.location.name}, ${response.location.country}</p>
                <p class="KindOfWeather">${response.current.condition.text}</p>
                <p class="date">${response.current.last_updated}</p>
                <img class="Image1" src="${response.current.condition.icon}"/>
                <p class="temperature">${response.current.temp_c} º</p>
                <p class="temperatureSensation">Feels like ${response.current.feelslike_c} º</p>
                
            `;
            console.log(response.location.name);
        }
    }
    clima.send();
}

partesuperior();