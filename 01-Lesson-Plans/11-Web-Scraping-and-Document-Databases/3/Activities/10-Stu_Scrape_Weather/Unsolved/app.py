# Import necessary libraries
from flask import Flask, render_template, redirect
import pymongo
import scrape_info

# Create instance of Flask app
app = Flask(__name__)

# Create connection to MongoDB database `weather_db` and collection `forecasts`
# YOUR CODE HERE

# Create route that renders index.html template and finds documents from mongo
@app.route('/')
def home():

	# YOUR CODE HERE
	return

# Create route that will trigger scrape functions
@app.route('/scrape')
def scrape():

	# Run scrape functions
	# YOUR CODE HERE

	# Combine results into one dictionary
	# YOUR CODE HERE

	# Insert forecast into database
	# YOUR CODE HERE

	# Redirect back to home page
	return redirect('/', code=302)

if __name__ == '__main__':
	app.run(debug=True)
