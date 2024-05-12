var origemMarker = null;
var destinoMarker = null;

var map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: -23.4698412, lng: -47.4299885 },
  zoom: 12,
});

var directionsRenderer = new google.maps.DirectionsRenderer({
  map: map,
});

map.addListener("click", function (event) {
  if (origemMarker == null) {
    origemMarker = new google.maps.Marker({
      position: event.latLng,
      map: map,
    });
    document.getElementById("origem").value =
      event.latLng.lat() + ", " + event.latLng.lng();
  } else if (destinoMarker == null) {
    destinoMarker = new google.maps.Marker({
      position: event.latLng,
      map: map,
    });
    document.getElementById("destino").value =
      event.latLng.lat() + ", " + event.latLng.lng();
    var directionsService = new google.maps.DirectionsService();
    var request = {
      origin: document.getElementById("origem").value,
      destination: document.getElementById("destino").value,
      travelMode: "DRIVING",
    };

    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsRenderer.setDirections(result);
      } else {
        alert("Não foi possível calcular a rota.");
      }
    });
  } else {
    origemMarker.setMap(null);
    destinoMarker.setMap(null);
    origemMarker = new google.maps.Marker({
      position: event.latLng,
      map: map,
    });
    destinoMarker = null;
    document.getElementById("origem").value =
      event.latLng.lat() + ", " + event.latLng.lng();
    document.getElementById("destino").value = "";
    directionsRenderer.set("directions", null);
  }
});

function calcular() {
  var origem = document.getElementById("origem").value;
  var destino = document.getElementById("destino").value;

  if (origem == "" || destino == "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    var directionsService = new google.maps.DirectionsService();
    var request = {
      origin: origem,
      destination: destino,
      travelMode: "DRIVING",
    };

    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsRenderer.setDirections(result);

        var distancia = result.routes[0].legs[0].distance.value / 1000;

        // Abrir nova janela com os resultados
        //     var url = "resultado.html";
        //     url += "?distancia=" + distancia.toFixed(2);
        //     window.open(url, "_blank");
      }
      // else {
      //     alert("Não foi possível calcular a rota.");
      // }
    });
  }
}
