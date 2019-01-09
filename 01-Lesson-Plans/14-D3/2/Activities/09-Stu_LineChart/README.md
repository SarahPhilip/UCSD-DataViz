# Line Chart

Create a line chart to demonstrate the number of miles per month the user of a fitness application has walked since they started using the app.

## Instructions

1. Take a moment to study the new data set `miles-walked-this-month.csv`.

2. Configure your x and y scales as `xTimeScale` and `yLinearScale`.

3. Create your axes generator functions.

4. Run the `d3.line` method to create and save a new line generator function. Configure this function to plot the x-axis using `xTimeScale` function, passing in the `date` value for each element in the data set. Then, configure this function to plot the y-axis using the `yLinearScale` function, passing in the `miles` property for each element in the data set.

5. Append an SVG `path` to the SVG group element. Set the `d` attribute of the new SVG `path` using the line generator function created in the last step. Pass `data` into the line generator as an argument.  Give this element a class of "line".

6. Append two `<g>` elements and use the axes generator functions you created in step 3 to append an axis to each.  Make sure to place these elements to correctly display your axes.

## Hints

* See D3 documentation for [d3.line](https://github.com/d3/d3-shape#line) to better understand the steps for creating a line generator function.

* Check out a [basic line chart example](https://bl.ocks.org/mbostock/3883245) made by D3 creator, Mike Bostock.

* Check the browser often, print any values you're unsure about to the console.
