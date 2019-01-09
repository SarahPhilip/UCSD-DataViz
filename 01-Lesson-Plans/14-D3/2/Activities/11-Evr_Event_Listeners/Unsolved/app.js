var dataArray = [1, 2, 3];
var dataCategories = ['one', 'two', 'three'];

function makeResponsiveChart() {

  // clear old chart if already rendered
  d3.select('body').select('svg').remove();

  //
  // dimensions
  //

  // svg size
  var svgHeight = window.innerHeight;
  var svgWidth = window.innerWidth;

  // margins
  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };

  // chart size 
  var chartHeight = svgHeight - margin.top - margin.bottom;
  var chartWidth = svgWidth - margin.left - margin.right;

  //
  // create containers
  //

  // create svg container
  var svg = d3.select('body').append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth);

  // shift everything over by the margins
  var chartGroup = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  //
  // create scales
  //

  // scale y to chart height
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataArray)])
    .range([chartHeight, 0]);

  // scale x to chart width
  var xScale = d3.scaleBand()
    .domain(dataCategories)
    .range([0, chartWidth])
    .padding(0.1);

  //
  // create axes
  //

  // create axes
  var yAxis = d3.axisLeft(yScale);
  var xAxis = d3.axisBottom(xScale);

  // set x to the bottom of the chart
  chartGroup.append('g')
    .attr('transform', `translate(0, ${chartHeight})`)
    .call(xAxis);

  // set y to the y axis
  chartGroup.append('g')
    .call(yAxis);

  //
  // graph data
  //

  chartGroup.selectAll('rect')
    .data(dataArray)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(dataCategories[i]))
    .attr('y', d => yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', d => chartHeight - yScale(d))
    .attr('fill', 'green')

    // event listener for onclick event

    // event listener for mouseover

    // event listener for mouseout

}

makeResponsiveChart();

// Event listener for window resize.
// When the browser window is resized, makeResponsiveChart() is called.
d3.select(window).on('resize', makeResponsiveChart);