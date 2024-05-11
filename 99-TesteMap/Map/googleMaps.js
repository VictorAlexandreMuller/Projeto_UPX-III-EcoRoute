// ----------------------------------------------------------------------------
// Temas Styles:
// Style Maps, site: https://snazzymaps.com/explore
// Tema utilizado: https://snazzymaps.com/style/21/hopper
// ----------------------------------------------------------------------------
// Documentação dos Controls:
// https://developers.google.com/maps/documentation/javascript/reference/control?hl=pt-br
// https://developers.google.com/maps/documentation/javascript/controls?hl=pt-br#ControlsOverview
// ----------------------------------------------------------------------------
// Documentação dos Marcadores:
// https://developers.google.com/maps/documentation/javascript/markers?hl=pt-br
// Icon: https://developers.google.com/maps/documentation/javascript/examples/icon-simple#maps_icon_simple-javascript
// ----------------------------------------------------------------------------
// Documentação API Maps JavaScript:
// https://developers.google.com/maps/documentation/javascript?hl=pt-br

// ------------------------------ VARIAVEIS -----------------------------------
let map;
const centerMap = { lat: -23.4698412, lng: -47.4299885 };
var origemMarker = null;
var destinoMarker = null;

var pontoColetaNorte = { lat: -23.4362109, lng: -47.4785626 };
var pontoColetaLeste = { lat: -23.4821506, lng: -47.4140626 };
var pontoColetaSul = { lat: -23.5597765, lng: -47.4566038 };
var pontoColetaOeste = { lat: -23.4978866, lng: -47.5186267 };

var results = [];

// -------------------------- BOTAO CENTRALIZAR -------------------------------
// Utilização recomendada pela Google:
// CSS
// Interacao
// div - Controle
//     div - ui
//         div - text

class CenterControl {
  constructor(map) {
    this.controlDiv = document.createElement("div");
    this.controlUI = document.createElement("div");
    this.controlText = document.createElement("div");

    this.controlUI.title = "Centralizar Mapa";
    this.controlUI.style.backgroundColor = "#fff"; // Preto
    this.controlUI.style.border = "2px solid #ebebeb";
    this.controlUI.style.borderRadius = "3px";
    this.controlUI.style.padding = "0.5vw";
    this.controlUI.style.cursor = "pointer";
    this.controlUI.style.marginBottom = "0.7vw";

    this.controlDiv.appendChild(this.controlUI);

    this.controlText.innerHTML = "Centralizar";
    this.controlText.style.fontSize = "0.9vw";
    this.controlText.style.textAlign = "center";
    this.controlText.style.lineHeight = "20px";
    this.controlText.style.color = "#000"; // Branco
    this.controlText.style.fontWeight = "bold";
    this.controlText.style.fontFamily = "Arial, Helvetica, sans-serif";

    this.controlUI.appendChild(this.controlText);

    this.controlUI.addEventListener("click", () => {
      map.setCenter(centerMap);
    });
  }
}

// --------------------- Iniciar mapa ao carregar a tela ----------------------
function initMap() {
  var mapOptions = {
      center: centerMap,
      zoom: 11,

      disableDefaultUI: true,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: true,
      fullscreenControl: true,

      // O mapTypeControl acima pode estar desabilitado
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT, // DEFAULT - DROPDOWN_MENU -- HORIZONTAL_BAR
        position: google.maps.ControlPosition.TOP_CENTER,
      },

      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },

      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },

      // ---------- STYLE - Colocar o tema desejado aqui dentro ---------------
      styles: [
        //   {
        //     featureType: "water",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#165c64",
        //       },
        //       {
        //         saturation: 34,
        //       },
        //       {
        //         lightness: -69,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "landscape",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#b7caaa",
        //       },
        //       {
        //         saturation: -14,
        //       },
        //       {
        //         lightness: -18,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "landscape.man_made",
        //     elementType: "all",
        //     stylers: [
        //       {
        //         hue: "#cbdac1",
        //       },
        //       {
        //         saturation: -6,
        //       },
        //       {
        //         lightness: -9,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "road",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#8d9b83",
        //       },
        //       {
        //         saturation: -89,
        //       },
        //       {
        //         lightness: -12,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "road.highway",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#d4dad0",
        //       },
        //       {
        //         saturation: -88,
        //       },
        //       {
        //         lightness: 54,
        //       },
        //       {
        //         visibility: "simplified",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "road.arterial",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#bdc5b6",
        //       },
        //       {
        //         saturation: -89,
        //       },
        //       {
        //         lightness: -3,
        //       },
        //       {
        //         visibility: "simplified",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "road.local",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#bdc5b6",
        //       },
        //       {
        //         saturation: -89,
        //       },
        //       {
        //         lightness: -26,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "poi",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#c17118",
        //       },
        //       {
        //         saturation: 61,
        //       },
        //       {
        //         lightness: -45,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "poi.park",
        //     elementType: "all",
        //     stylers: [
        //       {
        //         hue: "#8ba975",
        //       },
        //       {
        //         saturation: -46,
        //       },
        //       {
        //         lightness: -28,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "transit",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#a43218",
        //       },
        //       {
        //         saturation: 74,
        //       },
        //       {
        //         lightness: -51,
        //       },
        //       {
        //         visibility: "simplified",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "administrative.province",
        //     elementType: "all",
        //     stylers: [
        //       {
        //         hue: "#ffffff",
        //       },
        //       {
        //         saturation: 0,
        //       },
        //       {
        //         lightness: 100,
        //       },
        //       {
        //         visibility: "simplified",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "administrative.neighborhood",
        //     elementType: "all",
        //     stylers: [
        //       {
        //         hue: "#ffffff",
        //       },
        //       {
        //         saturation: 0,
        //       },
        //       {
        //         lightness: 100,
        //       },
        //       {
        //         visibility: "off",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "administrative.locality",
        //     elementType: "labels",
        //     stylers: [
        //       {
        //         hue: "#ffffff",
        //       },
        //       {
        //         saturation: 0,
        //       },
        //       {
        //         lightness: 100,
        //       },
        //       {
        //         visibility: "off",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "administrative.land_parcel",
        //     elementType: "all",
        //     stylers: [
        //       {
        //         hue: "#ffffff",
        //       },
        //       {
        //         saturation: 0,
        //       },
        //       {
        //         lightness: 100,
        //       },
        //       {
        //         visibility: "off",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "administrative",
        //     elementType: "all",
        //     stylers: [
        //       {
        //         hue: "#3a3935",
        //       },
        //       {
        //         saturation: 5,
        //       },
        //       {
        //         lightness: -57,
        //       },
        //       {
        //         visibility: "off",
        //       },
        //     ],
        //   },
        //   {
        //     featureType: "poi.medical",
        //     elementType: "geometry",
        //     stylers: [
        //       {
        //         hue: "#cba923",
        //       },
        //       {
        //         saturation: 50,
        //       },
        //       {
        //         lightness: -46,
        //       },
        //       {
        //         visibility: "on",
        //       },
        //     ],
        //   },
      ],
    },
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const centerControl = new CenterControl(map);

  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(
    centerControl.controlDiv
  );

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  new google.maps.Marker({
    position: { lat: -23.4698412, lng: -47.4299885 },
    map,
    title: "FACENS",
    optimized: true,
    label: "F",
  });

  new google.maps.Marker({
    position: pontoColetaNorte,
    map,
    title: "Ponto de Coleta Norte",
    icon: image,
    optimized: true, // Melhora a performance ao renderizar vários marcadores como um único elemento estático
  });

  new google.maps.Marker({
    position: pontoColetaLeste,
    map,
    title: "Ponto de Coleta Leste",
    icon: image,
    optimized: true,
  });

  new google.maps.Marker({
    position: pontoColetaSul,
    map,
    title: "Ponto de Coleta Sul",
    icon: image,
    optimized: true,
  });

  new google.maps.Marker({
    position: pontoColetaOeste,
    map,
    title: "Ponto de Coleta Oeste",
    icon: image,
    optimized: true,
  });

  // ---------------------------------------------------------------

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
}

// ---------------------------------------------------------------------------

function calcular() {
  let arrayPontos = [
    pontoColetaNorte, // 0
    pontoColetaLeste, // 1
    pontoColetaSul, // 2
    pontoColetaOeste, // 3
  ];
  var origem = document.getElementById("idOrigem").value;

  if (origem == "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    var directionsService = new google.maps.DirectionsService();

    arrayPontos.forEach(fetchDistance);

    function fetchDistance(destination, index) {
      var request = {
        origin: origem,
        destination: destination,
        travelMode: "DRIVING",
      };

      directionsService.route(request, function (result, status) {
        if (status == "OK") {
          // directionsRenderer.setDirections(result);
          console.log(result);

          var distancia = result.routes[0].legs[0].distance.value / 1000;
          results.push({ distance: distancia, point: index });
        }
      });
    }

    results.sort();
    console.log(results);

    document.getElementById("distancia").textContent = results[0].distance;
  }
}
