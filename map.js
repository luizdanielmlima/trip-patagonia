var photo = document.getElementById('photo');
var caption = document.getElementById('caption');
var photosPath = './assets/map-photos/';

//GOOGLE MAPS STUFF
var newMap;
var currentMarkerIndex = 0;
var markersArray = [];
var arrowsArray = [];
var inactiveIcon = './assets/icons/camera_orange_s.png';
var activeIcon = './assets/icons/camera_blue_s.png';

function initMap() {
  // Map and Markes Variables
  var iconOffset = new google.maps.Point(18, 18);
  var mapCenter = { lat: -41.18503032216625, lng: -71.47591652642285 };
  var options = {
    center: mapCenter,
    zoom: 13,
    mapTypeId: 'satellite',
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'satellite']
    }
  };

  // Array of markers
  var markers = [
    {
      id: 1,
      title: 'Starting the trekking, at Cerro Cathedral',
      coords: { lat: -41.17080702348362, lng: -71.44211856468644 },
      lookAt: { lat: -41.173143752773264, lng: -71.45137506983917 },
      image: photosPath + 'IMG_1644.JPG'
    },
    {
      id: 2,
      title: 'Beggining of the trail to Refugio Frey',
      coords: { lat: -41.18533913934483, lng: -71.43900449721127 },
      lookAt: { lat: -41.19226456907321, lng: -71.4391871120755 },
      image: photosPath + 'IMG_1652.JPG'
    },
    {
      id: 3,
      title: 'View of Lago Gutierrez',
      coords: { lat: -41.1964484944679, lng: -71.43728788344174 },
      lookAt: { lat: -41.199627178101984, lng: -71.4282007839505 },
      image: photosPath + 'IMG_1671.JPG'
    },
    {
      id: 4,
      title: 'First View of The Valley',
      coords: { lat: -41.20936397877486, lng: -71.45050580946713 },
      lookAt: { lat: -41.20556832891383, lng: -71.4582415249173 },
      image: photosPath + 'IMG_1695.JPG'
    },
    {
      id: 5,
      title: 'Upper View of the Mountains and the valley',
      coords: { lat: -41.19838597961032, lng: -71.47831495253354 },
      lookAt: { lat: -41.19239374478953, lng: -71.48124414942902 },
      image: photosPath + 'IMG_1707.JPG'
    },
    {
      id: 6,
      title: 'Arriving at Refugio Frey',
      coords: { lat: -41.19913971934484, lng: -71.48514905966624 },
      lookAt: { lat: -41.19839703203824, lng: -71.48720899618968 },
      image: photosPath + 'IMG_1723.JPG'
    },
    {
      id: 7,
      title: 'Camping at Refugio Frey',
      coords: { lat: -41.1979262186466, lng: -71.48640822325791 },
      lookAt: { lat: -41.19838088656841, lng: -71.48896852530345 },
      image: photosPath + 'IMG_1732.JPG'
    },
    {
      id: 8,
      title: 'Refugio Frey, view from across the lake',
      coords: { lat: -41.19919226818601, lng: -71.48869077312025 },
      lookAt: { lat: -41.198445468423806, lng: -71.4867798427473 },
      image: photosPath + 'IMG_1766.JPG'
    },
    {
      id: 9,
      title: 'Leaving Refugio Frey, going to Refugio San Martin',
      coords: { lat: -41.197786316664505, lng: -71.49975397910941 },
      lookAt: { lat: -41.19467806154918, lng: -71.5030589789227 },
      image: photosPath + 'IMG_1776.JPG'
    },
    {
      id: 10,
      title: 'View of the small Laguna Schmidt, still frozen from the winter',
      coords: { lat: -41.19242010103497, lng: -71.50370833362183 },
      lookAt: { lat: -41.194970810662475, lng: -71.49704198133884 },
      image: photosPath + 'IMG_1791.jpg'
    },
    {
      id: 11,
      title: 'Valley on the way to San Martin',
      coords: { lat: -41.18640296552895, lng: -71.50583097003982 },
      lookAt: { lat: -41.18510520708436, lng: -71.51188194959934 },
      image: photosPath + 'IMG_1807.JPG'
    },
    {
      id: 12,
      title: 'Trying to descend the hill...',
      coords: { lat: -41.18609977760806, lng: -71.50873799718016 },
      lookAt: { lat: -41.18529899175169, lng: -71.50123894422825 },
      image: photosPath + 'IMG_1812.jpg'
    },
    {
      id: 13,
      title: 'In the woods, after the descent',
      coords: { lat: -41.18658423084287, lng: -71.51199956334227 },
      lookAt: { lat: -41.18725967186077, lng: -71.51513425459132 },
      image: photosPath + 'IMG_1818.JPG'
    },
    {
      id: 14,
      title: 'Camping, midway to Refugio San Martin',
      coords: { lat: -41.18760462811332, lng: -71.51842316285268 },
      lookAt: { lat: -41.18890676905813, lng: -71.52058035295784 },
      image: photosPath + 'IMG_1832.JPG'
    },
    {
      id: 15,
      title: 'Going uphill again, leaving the valley',
      coords: { lat: -41.18379289707056, lng: -71.5391211482521 },
      lookAt: { lat: -41.18469971067734, lng: -71.53200155427595 },
      image: photosPath + 'IMG_1847.JPG'
    },
    {
      id: 16,
      title: 'In the snow, almost finishing climbing the hill, ',
      coords: { lat: -41.18179528422565, lng: -71.5437318857418 },
      lookAt: { lat: -41.18247732394025, lng: -71.53869632470156 },
      image: photosPath + 'IMG_1848.JPG'
    },
    {
      id: 17,
      title: 'Beautiful view of Laguna Honda and Cerro Tronador',
      coords: { lat: -41.18222842302044, lng: -71.54595048329963 },
      lookAt: { lat: -41.18322960534709, lng: -71.55436163755337 },
      image: photosPath + 'IMG_1858.jpg'
    },
    {
      id: 18,
      title: 'Arriving at Refugio San Martin',
      coords: { lat: -41.18700531853348, lng: -71.55921642843975 },
      lookAt: { lat: -41.18630915216112, lng: -71.56272088522701 },
      image: photosPath + 'IMG_1862.JPG'
    }
  ];

  //Points for the trekking path
  var trekkingPathPoints = [
    markers[0].coords,
    markers[1].coords,
    markers[2].coords,
    { lat: -41.204016685676834, lng: -71.43723482090417 },
    { lat: -41.20814944003703, lng: -71.43963808018151 },
    { lat: -41.210224014209444, lng: -71.4433647600896 },
    markers[3].coords,
    markers[4].coords,
    markers[5].coords,
    markers[6].coords,
    { lat: -41.19904268749664, lng: -71.48690913822327 },
    markers[7].coords,
    markers[8].coords,
    markers[9].coords,
    markers[10].coords,
    markers[11].coords,
    markers[12].coords,
    markers[13].coords,
    { lat: -41.187172127547704, lng: -71.52457981846067 },
    markers[14].coords,
    markers[15].coords,
    markers[16].coords,
    markers[17].coords
  ];

  // New Map
  newMap = new google.maps.Map(document.getElementById('map'), options);

  // Listen for clicks on map - USED ONLY FOR GETTING COORDS!
  var testCoords = false;
  if (testCoords) {
    newMap.addListener('click', function(event) {
      var markerRef = new google.maps.Marker({
        position: event.latLng,
        map: newMap
      });
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();
      console.log(`{ lat: ${latitude}, lng: ${longitude} },`);
    });
  }

  // loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  drawTrekkingPath();

  function drawTrekkingPath() {
    // Define a symbol using SVG path notation, with an opacity of 1.
    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 2
    };

    // Creates the polyline adding the symbol to achieve the dashed effect
    var line = new google.maps.Polyline({
      path: trekkingPathPoints,
      strokeOpacity: 0,
      strokeColor: '#ddd',
      icons: [
        {
          icon: lineSymbol,
          offset: '0',
          repeat: '10px'
        }
      ],
      map: newMap
    });
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: newMap,
      title: props.id.toString(),
      icon: {
        url: inactiveIcon,
        anchor: iconOffset
      }
    });

    //draws an arrow showing the direction the pic was taken
    drawLineOfSight(props.coords, props.lookAt);

    //makes the first marker active
    if (props.id === 1) {
      activateMarker(marker);
    }

    //store the marker object drawn in global array
    markersArray.push(marker);

    marker.addListener('click', function(event) {
      // Centers and zoom in on the marker
      newMap.panTo(marker.getPosition());
      // newMap.setZoom(14);

      // Changes photo accordingly
      photo.src = props.image;
      caption.innerText = props.title;

      //first, set the previous clicked marker to default icon
      markersArray[currentMarkerIndex].setIcon({
        url: inactiveIcon,
        anchor: iconOffset
      });

      //first, set the previous clicked marker ARROW to invisible
      arrowsArray[currentMarkerIndex].setVisible(false);

      //updates the current Marker
      currentMarkerIndex = +marker.title - 1;

      //then set the clicked marker to active icon and arrow visible
      activateMarker(marker);
    });

    function activateMarker(whichMarker) {
      marker.setIcon({
        url: activeIcon,
        anchor: iconOffset
      });
      arrowsArray[currentMarkerIndex].setVisible(true);
    }

    function drawLineOfSight(origin, lookAt) {
      var arrowSymbol = {
        path: 'M12 12l-12 8v-16l12 8zm0-8v16l12-8-12-8z',
        strokeColor: '#00f',
        strokeWeight: 2
      };

      var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
      };

      // Create the polyline and add the symbol via the 'icons' property.
      var line = new google.maps.Polyline({
        path: [origin, lookAt],
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        visible: false,
        icons: [
          {
            icon: lineSymbol,
            offset: '100%'
          }
        ],
        map: newMap
      });

      //store the arrow object drawn in global array
      arrowsArray.push(line);
    }
  }
}
