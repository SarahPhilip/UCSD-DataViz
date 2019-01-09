// Creating map object
var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Link to GeoJSON
// var APILink = "http://data.beta.nyc//dataset/d6ffa9a4-c598-4b18-8caf-14abde6a5755/resource/74cdcc33-512f-439c-" +
// "a43e-c09588c4b391/download/60dbe69bcd3640d5bedde86d69ba7666geojsonmedianhouseholdincomecensustract.geojson";
var APILink = 'chloropleth_data.geojson';

// Grab data with d3
// YOUR CODE HERE

  // Create a new choropleth layer
  // YOUR CODE HERE

    // Define what property in the features to use
    // YOUR CODE HERE
    
    // Set color scale
    // YOUR CODE HERE

    // Number of breaks in step range
    // YOUR CODE HERE

    // Set mode (q for quartile, e for equidistant, k for k-means)
    // YOUR CODE HERE

    // Set style (border color, weight, fill opacity)
    // YOUR CODE HERE

    // Bind a pop-up to each layer with local name, state, MHI
    // YOUR CODE HERE

  // Set up the legend
  // YOUR CODE HERE

  // Configure legend HTML
  // Hint: See "Legend" example at:
  // https://github.com/timwis/Leaflet-choropleth
  // YOUR CODE HERE

  // Add legend to the map
  // YOUR CODE HERE
