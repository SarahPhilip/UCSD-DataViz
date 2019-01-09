var url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

// Perform an API call to the Citi Bike API to get station information
// YOUR CODE HERE

  //
  // Build bike stations layer
  //

  // Initialize an array to hold bike markers
  // YOUR CODE HERE

  // Loop through the station data
  // YOUR CODE HERE

    // For each station, create a marker and
    // bind a popup with the station's name and capacity
    // YOUR CODE HERE

    // Add the marker to the bikeMarkers array
    // YOUR CODE HERE

  // Create a layer group made from the bike markers array
  // YOUR CODE HERE

  //
  // Build map
  //

  // Create the tile layer that will be the background of our map
  // YOUR CODE HERE

  // Create a baseMaps object to hold the tile layer
  // YOUR CODE HERE

  // Create an overlayMaps object to hold the bike stations layer
  // YOUR CODE HERE

  // Create the map object with options
  // YOUR CODE HERE

  // Create a layer control, pass in the baseMaps and overlayMaps
  // Add the layer control to the map
  // YOUR CODE HERE
