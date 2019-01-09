// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsiveChart() {

  // clear old chart if already rendered
  d3.select('body').select('svg').remove();

  // SVG wrapper dimensions are determined by the current width and
  // height of the browser window.
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;

  var margin = {
    top: 80,
    bottom: 50,
    right: 50,
    left: 50
  };

  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

  // Append SVG element
  var svg = d3
    .select('.chart')
    .append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth);

  // Append group element
  var chartGroup = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Read CSV
  d3.csv('norway_medals.csv').then(function(data) {

    // create date parser
    var dateParser = d3.timeParse('%d-%b');

    // parse data
    data.forEach(function(d) {
      d.date = dateParser(d.date);
      d.medals = +d.medals;
    });

    // create scales
    var xTimeScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.medals)])
      .range([height, 0]);

    // create axes
    var xAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat('%d-%b'));
    var yAxis = d3.axisLeft(yLinearScale).ticks(6);

    // append axes
    chartGroup.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    chartGroup.append('g')
      .call(yAxis);

    // line generator
    var line = d3.line()
      .x(d => xTimeScale(d.date))
      .y(d => yLinearScale(d.medals));

    // append line
    chartGroup.append('path')
      .attr('d', line(data))
      .attr('fill', 'none')
      .attr('stroke', 'red');

    // append circles
    var circlesGroup = chartGroup.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xTimeScale(d.date))
      .attr('cy', d => yLinearScale(d.medals))
      .attr('r', '10')
      .attr('fill', 'gold')
      .attr('stroke-width', '1')
      .attr('stroke', 'black');

    // Date formatter to display dates nicely
    var dateFormatter = d3.timeFormat('%d-%b');

    // Step 1: Initialize Tooltip
    var toolTip = d3.tip()
      .attr('class', 'tooltip')
      .offset([0, 0])
      .html(d => `<strong>${dateFormatter(d.date)}<strong><hr>${d.medals} medal(s) won`);

    // Step 2: Create the tooltip in chartGroup.
    chartGroup.call(toolTip);

    // Step 3: Create 'mouseover' event listener to display tooltip
    // Step 4: Create 'mouseout' event listener to hide tooltip
    circlesGroup
      .on('mouseover', toolTip.show)
      .on('mouseout', toolTip.hide);
  });
}

// When the browser loads, makeResponsiveChart() is called.
makeResponsiveChart();

// When the browser window is resized, makeResponsiveChart() is called.
d3.select(window).on('resize', makeResponsiveChart);
