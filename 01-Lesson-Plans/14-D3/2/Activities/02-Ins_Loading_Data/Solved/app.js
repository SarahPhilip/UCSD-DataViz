d3.csv('hours-of-tv-watched.csv').then(function(data) {

  // log a list of names
  var names = data.map(d => d.name);
  console.log('Names', names);

  // Cast each hours value in data as a number using the unary + operator
  data.forEach(function(d) {
    d.hours = +d.hours;
    console.log('Name:', d.name);
    console.log('Hours:', d.hours);
  });
});
