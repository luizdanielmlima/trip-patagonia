var map;
function initMap() {
  var bariloche = { lat: -41.128268, lng: -71.480001 };
  var elbolson = { lat: -41.9657302, lng: -71.5589659 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -41.5208329, lng: -71.6835978 },
    zoom: 8
  });

  // sets the markers at the cities and its info windows
  var marker = new google.maps.Marker({ position: bariloche, map: map });
  var marker2 = new google.maps.Marker({ position: elbolson, map: map });

  // Markers pop-ups
  var BarilhocheInfo =
    '<div id="content">' +
    '<h4 id="firstHeading" class="firstHeading">Bariloche</h4>' +
    '<div id="bodyContent">' +
    '<p>Located in Argentina´s Río Negro province and 1,680 kilometers from Buenos Aires. Bariloche is one of the most breathtaking places in Argentina. It´s quintessentially Patagonian.</p>' +
    '</div>' +
    '</div>';

  var ElBolsonInfo =
    '<div id="content">' +
    '<h4 id="firstHeading" class="firstHeading">El Bolsón</h4>' +
    '<div id="bodyContent">' +
    '<p>The city is located 129 kilometers (80 miles) from Bariloche, heading south on National Route 40. There are many trails around the city, with beautiful mountains, glaciers and rivers.</p>' +
    '</div>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: BarilhocheInfo
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
    infowindow.setContent(BarilhocheInfo);
  });

  marker2.addListener('click', function() {
    infowindow.open(map, marker2);
    infowindow.setContent(ElBolsonInfo);
  });

  // Draws a line between the 2 cities
  var travelPath = new google.maps.Polyline({
    path: [bariloche, elbolson],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 1
  });
  travelPath.setMap(map);
}

// let mySlider = new Glide('.glide', {
//   type: 'carousel',
//   gap: 40,
//   perView: 3
// });

// mySlider.mount();
