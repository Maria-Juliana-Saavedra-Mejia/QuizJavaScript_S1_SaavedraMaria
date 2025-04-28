function partesuperior(){
    let ciudad= "Floridablanca";
    let codigo = "ddd71d032c0b41bdabd115758252804";
    let info= `http://api.weatherapi.com/v1/current.json?key==${codigo}&q=${ciudad}`
    let clima = new XMLHttpRequest();
    clima.open(`GET`, url);
    clima.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);  
            let imagen = response["cards"][0]["image"]; 
            imagen.inneHTML
        }
    }
    clima.send()
}
partesuperior()