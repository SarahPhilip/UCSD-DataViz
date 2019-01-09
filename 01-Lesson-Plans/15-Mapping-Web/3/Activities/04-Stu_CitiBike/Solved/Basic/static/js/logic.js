var url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

// Perform an API call to the Citi Bike API to get station information
d3.json(url).then(function(response) {

  //
  // Build bike stations layer
  //

  // Initialize an array to hold bike markers
  var bikeMarkers = [];

  // Loop through the station data
  response.data.stations.forEach(station => {

    // For each station, create a marker and
    // bind a popup with the station's name and capacity
    var bikeMarker = L.marker(
      [station.lat, station.lon]
    ).bindPopup(
      "<h3>" + station.name + "</h3>" +
      "<h3>Capacity: " + station.capacity + "</h3>"
    );

    // Add the marker to the bikeMarkers array
    bikeMarkers.push(bikeMarker);
  })

  // Create a layer group made from the bike markers array
  var bikeStations = L.layerGroup(bikeMarkers);

  //
  // Build map
  //

  // Create the tile layer that will be the background of our map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold the tile layer
  var baseMaps = {
    "Light Map": lightmap
  };

  // Create an overlayMaps object to hold the bike stations layer
  var overlayMaps = {
    "Bike Stations": bikeStations
  };

  // Create the map object with options
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [lightmap, bikeStations]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);

});
