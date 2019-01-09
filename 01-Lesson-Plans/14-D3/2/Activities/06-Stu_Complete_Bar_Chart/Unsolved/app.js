// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv('hours-of-tv-watched.csv').then(function(data) {

  // Cast the hours value to a number for each piece of data
  data.forEach(function(d) {
    d.hours = +d.hours;
  });

  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  // YOUR CODE HERE

  // Create a linear scale for the vertical axis.
  // YOUR CODE HERE

  // Create two new axes functions passing our scales in as arguments
  // YOUR CODE HERE

  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them
  // YOUR CODE HERE

  // Create one SVG rectangle per piece of data
  // Use the linear and band scales to position each rectangle within the chart
  // YOUR CODE HERE

});
