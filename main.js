// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 56
});

//GOOGLE MAPS STUFF
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
    '<p>The city is located 1,680 kilometers from Buenos Aires, approximately 2h and 30min by plane.</p>' +
    '</div>' +
    '</div>';

  var ElBolsonInfo =
    '<div id="content">' +
    '<h4 id="firstHeading" class="firstHeading">El Bolsón</h4>' +
    '<div id="bodyContent">' +
    '<p>The city is located 129 kilometers (80 miles) south of Bariloche through Route 40, approximately 2h by bus.</p>' +
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
