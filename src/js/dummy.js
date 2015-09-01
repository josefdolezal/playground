// test
// test 2
var x = document.getElementById("bind");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else { x.innerHTML = "Geolocation is not supported by this browser."; }
}

function showPosition(position) {
    var latlondata = position.coords.latitude + "," + position.coords.longitude;
    var latlon = " Sua Latitude :=" + position.coords.latitude + "," + "sua Longitude :=" + position.coords.longitude;
    alert(latlon);
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
+ latlondata + "&zoom=14&size=400x300&sensor=false";
    document.getElementById("map").innerHTML = "<img src='" + img_url + "' />";
}

function showError(error) {
    if (error.code == 1) {
        x.innerHTML = "Usuario cancelou o compartilhamento da localização.";
    }
    else if (err.code == 2) {
        x.innerHTML = "Localidade não disponivel.";
    }
    else if (err.code == 3) {
        x.innerHTML = "Time Out na montagem do mapa.";
    }
    else {
        x.innerHTML = "Erro desconhecido.";
    }
}
