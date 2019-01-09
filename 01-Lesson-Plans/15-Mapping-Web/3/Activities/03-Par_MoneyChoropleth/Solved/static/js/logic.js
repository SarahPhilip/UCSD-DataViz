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
d3.json(APILink).then(function(data) {

  // Create a new choropleth layer
  var geojson = L.choropleth(data, {

    // Define what property in the features to use
    valueProperty: "MHI",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

    // Set mode (q for quartile, e for equidistant, k for k-means)
    mode: "q",

    // Set style (border color, weight, fill opacity)
    style: {
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Bind a pop-up to each layer with local name, state, MHI
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        feature.properties.LOCALNAME + ", " + 
        feature.properties.State + 
        "<br>Median Household Income:<br>" +
        "$" + feature.properties.MHI
      );
    }
  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({
    position: "bottomright"
  });

  // Configure legend HTML
  // Hint: See "Legend" example at:
  // https://github.com/timwis/Leaflet-choropleth
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h1>Median Income</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Add legend to the map
  legend.addTo(myMap);
});
