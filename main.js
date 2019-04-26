var map;
function initMap() {
  var bariloche = { lat: -41.128268, lng: -71.480001 };
  var elbolson = { lat: -41.9657302, lng: -71.5589659 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -41.5208329, lng: -71.6835978 },
    zoom: 8
  });
  var marker = new google.maps.Marker({ position: bariloche, map: map });
  var marker2 = new google.maps.Marker({ position: elbolson, map: map });
}

// let mySlider = new Glide('.glide', {
//   type: 'carousel',
//   gap: 40,
//   perView: 3
// });

// mySlider.mount();
