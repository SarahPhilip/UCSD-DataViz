// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select('body')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Configure a parseTime function which will return a new Date object from a string
var parseTime = d3.timeParse('%B');

// Load data from miles-walked-this-month.csv
d3.csv('miles-walked-this-month.csv').then(function(data) {

  // Format the date and cast the miles value to a number
  data.forEach(function(d) {
    d.date = parseTime(d.date);
    d.miles = +d.miles;
  });

  // Configure a time scale (x-axis)
  // Set the domain to be the extents of the data's dates
  // Set the range between 0 and the chartWidth
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, chartWidth]);

  // Configure a linear scale (y-axis)
  // Set the domain from 0 to the maximum miles
  // Set the range between chartHeight and 0
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.miles)])
    .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Configure a drawLine function which will use our scales to plot the line's points
  var drawLine = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.miles));

  // Append an SVG path and plot its points using the line function
  chartGroup.append('path')
    .attr('d', drawLine(data))
    .classed('line', true);

  // Append an SVG group element to the SVG area, create the left axis inside of it
  chartGroup.append('g')
    .classed('axis', true)
    .call(leftAxis);

  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append('g')
    .classed('axis', true)
    .attr('transform', 'translate(0, ' + chartHeight + ')')
    .call(bottomAxis);
});
