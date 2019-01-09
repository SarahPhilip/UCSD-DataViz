# Quartiles and Outliers

## Instructions

* Use code to determine the lower and upper quartiles and be sure to account for both odd and even lengths of a data set.

  * Reference <https://www.wikihow.com/Calculate-Outliers> to choose a method for best handling this.

  * Use [numpy.percentile](https://het.as.utexas.edu/HET/Software/Numpy/reference/generated/numpy.percentile.html) to help with the calculations.

* The difference between the upper and lower quartile is called the **interquartile range**, or IQR.

  * Like the standard deviation, the IQR describes how "spread out" the data set is.

  * Calculate the IQR for this list.

* Determine the outliers

  * Lower outliers are points that fall below the result of the equation Q1 - 1.5 * IQR

  * Upper outliers are points that above the result of the equation Q3 + 1.5 * IQR

* Finally create a box plot of that data.
