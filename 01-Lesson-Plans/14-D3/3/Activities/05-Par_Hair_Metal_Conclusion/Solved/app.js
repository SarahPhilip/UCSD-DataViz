// ============================================================================
// Create SVG
// ============================================================================

var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// Append an SVG group
var chartGroup = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// ============================================================================
// Create Chart
// ============================================================================

// Constants
const HAIR_LENGTH_AXIS = 'hair_length';
const NUM_ALBUMS_AXIS = 'num_ablums';

// Default to Hair Length Axis
var currentXAxis = HAIR_LENGTH_AXIS;

// Retrieve data from the CSV file and execute everything below
d3.csv('hairData.csv').then(function (data) {

  // Parse data
  data.forEach(function(d) {
    d.hair_length = +d.hair_length;
    d.num_hits = +d.num_hits;
    d.num_albums = +d.num_albums;
  });

  // Create x scale function for current x axis
  var xScale = getXScaleForAxis(data, currentXAxis);

  // Create y scale function
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.num_hits)])
    .range([height, 0]);

  // Create initial axis functions
  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);

  // append x axis
  var xAxis = chartGroup.append('g')
    .classed('x-axis', true)
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  // append y axis
  chartGroup.append('g')
    .call(yAxis);

  // append initial circles
  var circlesGroup = chartGroup.selectAll('circle')
    .data(data)
    .enter()
      .append('circle')
      .attr('cx', d => xScale(d[currentXAxis]))
      .attr('cy', d => yScale(d.num_hits))
      .attr('r', 20)
      .attr('fill', 'pink')
      .attr('opacity', '.5');

  // Create group for 2 x- axis labels
  var labelsGroup = chartGroup.append('g')
    .attr('transform', `translate(${width / 2}, ${height + 20})`);

  var hairLengthLabel = labelsGroup.append('text')
    .attr('x', 0)
    .attr('y', 20)
    .attr('value', 'hair_length') // value to grab for event listener
    .classed('active', true)
    .text('Hair Metal Ban Hair Length (inches)');

  var albumsLabel = labelsGroup.append('text')
    .attr('x', 0)
    .attr('y', 40)
    .attr('value', 'num_albums') // value to grab for event listener
    .classed('inactive', true)
    .text('# of Albums Released');

  // append y axis
  chartGroup.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    .attr('x', 0 - (height / 2))
    .attr('dy', '1em')
    .classed('axis-text', true)
    .text('Number of Billboard 500 Hits');

  // updateToolTip function above csv import
  var circlesGroup = updateToolTip(currentXAxis, circlesGroup);

  // x axis labels event listener
  labelsGroup.selectAll('text')
    .on('click', function() {
      // get value of selection
      var value = d3.select(this).attr('value');
      if (value !== currentXAxis) {

        // replaces currentXAxis with value
        currentXAxis = value;

        // functions here found above csv import
        // updates x scale for new data
        xScale = getXScaleForAxis(data, currentXAxis);

        // updates x axis with transition
        xAxis.transition()
          .duration(1000)
          .call(d3.axisBottom(xScale));

        // updates circles with new x values
        circlesGroup.transition()
          .duration(1000)
          .attr('cx', d => xScale(d[currentXAxis]));

        // updates tooltips with new info
        circlesGroup = updateToolTip(currentXAxis, circlesGroup);

        // changes classes to change bold text
        if (currentXAxis === 'num_albums') {
          albumsLabel
            .classed('active', true)
            .classed('inactive', false);
          hairLengthLabel
            .classed('active', false)
            .classed('inactive', true);
        }
        else {
          albumsLabel
            .classed('active', false)
            .classed('inactive', true);
          hairLengthLabel
            .classed('active', true)
            .classed('inactive', false);
        }
      }
    });
});

// ============================================================================
// Helper Functions
// ============================================================================

// function used for updating x-scale var upon click on axis label
function getXScaleForAxis(data, currentXAxis) {

  // create scales
  var xScale = d3.scaleLinear()
    .domain([
      d3.min(data, d => d[currentXAxis]) * 0.8,
      d3.max(data, d => d[currentXAxis]) * 1.2
    ])
    .range([0, width]);

  return xScale;
}

// function used for updating circles group with new tooltip
function updateToolTip(currentXAxis, circlesGroup) {
  var label = currentXAxis === 'hair_length' ? 'Hair Length:' : '# of Albums';

  var toolTip = d3.tip()
    .attr('class', 'tooltip')
    .offset([80, -60])
    .html(d => `${d.rockband}<br>${label} ${d[currentXAxis]}`);

  circlesGroup.call(toolTip);
  circlesGroup.on('mouseover', toolTip.show).on('mouseout', toolTip.hide);

  return circlesGroup;
}
