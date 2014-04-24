
function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var radlon1 = Math.PI * lon1/180;
    var radlon2 = Math.PI * lon2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
}

function initialize() {

  // Instantiate a directions service.
  directionsService = new google.maps.DirectionsService();
  // Create a map and center it on Manhattan.
  var currentLocation = new google.maps.LatLng(38.736963,-9.302505);
  var mapOptions = {
    zoom: 14,
    center: currentLocation
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Create a renderer for directions and bind it to the map.
  var rendererOptions = {
    map: map
  }
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)

  // Instantiate an info window to hold step text.
  stepDisplay = new google.maps.InfoWindow();
  
  navigator.geolocation.getCurrentPosition(calcRoute);
}

function calcRoute(position) {


  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  
  // First, remove any existing markers from the map.
  for (var i = 0; i < markerArray.length; i++) {
    markerArray[i].setMap(null);
  }

  // Now, clear the array itself.
  markerArray = [];

  // Retrieve the start and end locations and create
  // a DirectionsRequest using WALKING directions.
  var start = latitude + "," + longitude;
  
  var end=99999999999999;
  var i, auxi, gasnumber;
  
  for( i=0; i<5; i++) {
	auxi = distance(latitude, longitude, gas[i][0], gas[i][1]);
	if(auxi<end){
		end=auxi;
		gasnumber = i;
	}
  }
  
  var car1, car2;
  car1=gas[gasnumber][0];
  car2=gas[gasnumber][1];
  
  end = car1 + "," + car2;
  
  source = new google.maps.LatLng(latitude, longitude);
  desti = new google.maps.LatLng(car1, car2);
  
  var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
  };

  // Route the directions and pass the response to a
  // function to create markers for each step.
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      var warnings = document.getElementById('warnings_panel');
      warnings.innerHTML = '<b>' + response.routes[0].warnings + '</b>';
      directionsDisplay.setDirections(response);
	  var bounds = new google.maps.LatLngBounds(source, desti);
	  map.fitBounds(bounds);
	  map.setCenter(bounds.getCenter());
    }
  });
}
