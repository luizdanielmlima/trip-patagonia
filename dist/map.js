var photo = document.getElementById('photo');
var caption = document.getElementById('caption');
var photosPath = '/dist/assets/map-photos/';

//GOOGLE MAPS STUFF
var newMap;
function initMap() {
  // Map Options
  var options = {
    center: { lat: -41.18920753941348, lng: -71.48747573438294 },
    zoom: 13,
    mapTypeId: 'satellite'
  };

  // Array of markers
  var markers = [
    {
      title: 'Start at Cerro Cathedral Base',
      coords: { lat: -41.17080702348362, lng: -71.44211856468644 },
      image: photosPath + 'IMG_1644.JPG'
    },
    {
      title: 'Beggining of the trail to Refugio Frey',
      coords: { lat: -41.18533913934483, lng: -71.43900449721127 },
      image: photosPath + 'IMG_1652.JPG'
    },
    {
      title: 'View of Lago Gutierrez',
      coords: { lat: -41.1964484944679, lng: -71.43728788344174 },
      image: photosPath + 'IMG_1671.JPG'
    },
    {
      title: 'First View of The Valley',
      coords: { lat: -41.20936397877486, lng: -71.45050580946713 },
      image: photosPath + 'IMG_1695.JPG'
    },
    {
      title: 'Upper View of the Mountains and the valley',
      coords: { lat: -41.19838597961032, lng: -71.47831495253354 },
      image: photosPath + 'IMG_1707.JPG'
    },
    {
      title: 'Arriving at Refugio Frey',
      coords: { lat: -41.19857857677869, lng: -71.48550677570336 },
      image: photosPath + 'IMG_1723.jpg'
    },
    {
      title: 'Camping at Refugio Frey',
      coords: { lat: -41.1979262186466, lng: -71.48640822325791 },
      image: photosPath + 'IMG_1732.jpg'
    },
    {
      title: 'Refugio Frey, view from across the lake',
      coords: { lat: -41.19919226818601, lng: -71.48869077312025 },
      image: photosPath + 'IMG_1766.jpg'
    },
    {
      title: 'Leaving Refugio Frey, going to Refugio San Martin',
      coords: { lat: -41.197786316664505, lng: -71.49975397910941 },
      image: photosPath + 'IMG_1776.jpg'
    },
    {
      title: 'Valley on the way to San Martin',
      coords: { lat: -41.18640296552895, lng: -71.50583097003982 },
      image: photosPath + 'IMG_1807.jpg'
    },
    {
      title: 'Trying to descend the hill...',
      coords: { lat: -41.18609977760806, lng: -71.50873799718016 },
      image: photosPath + 'IMG_1812.jpg'
    },
    {
      title: 'The woods, after the descent',
      coords: { lat: -41.18658423084287, lng: -71.51199956334227 },
      image: photosPath + 'IMG_1818.jpg'
    },
    {
      title: 'Camping, midway to Refugio San Martin',
      coords: { lat: -41.18760462811332, lng: -71.51842316285268 },
      image: photosPath + 'IMG_1832.jpg'
    },
    {
      title: 'Going uphill again, leaving the valley',
      coords: { lat: -41.18379289707056, lng: -71.5391211482521 },
      image: photosPath + 'IMG_1847.jpg'
    },
    {
      title: 'Going uphill through the snow',
      coords: { lat: -41.18179528422565, lng: -71.5437318857418 },
      image: photosPath + 'IMG_1848.jpg'
    },
    {
      title: 'Beautiful view of Laguna Honda and Cerro Tronador',
      coords: { lat: -41.18224256801908, lng: -71.5446143123146 },
      image: photosPath + 'IMG_1858.jpg'
    },
    {
      title: 'Arriving at Refugio San Martin',
      coords: { lat: -41.18700531853348, lng: -71.55921642843975 },
      image: photosPath + 'IMG_1862.jpg'
    }
  ];

  // New Map
  newMap = new google.maps.Map(document.getElementById('map'), options);

  //Listen for clicks on map
  // newMap.addListener('click', function(event) {
  //   // Add marker
  //   addMarker({ coords: event.latLng });
  //   var latitude = event.latLng.lat();
  //   var longitude = event.latLng.lng();
  //   console.log(latitude + ', ' + longitude);
  // });

  // loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: newMap
    });

    marker.addListener('click', function() {
      photo.src = props.image;
      caption.innerText = props.title;
    });
  }
}
