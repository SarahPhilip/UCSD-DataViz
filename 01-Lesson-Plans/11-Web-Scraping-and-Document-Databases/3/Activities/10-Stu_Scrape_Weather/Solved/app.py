# Import necessary libraries
from flask import Flask, render_template, redirect
import pymongo
import scrape_info

# Create instance of Flask app
app = Flask(__name__)

# Create connection to MongoDB database `weather_db` and collection `forecasts`
client = pymongo.MongoClient('mongodb://localhost:27017')
db = client.weather_db
collection = db.forecasts

# Create route that renders index.html template and finds documents from mongo
@app.route('/')
def home():
    forecasts = collection.find()
    return render_template('index.html', forecasts=forecasts)

# Create route that will trigger scrape functions
@app.route('/scrape')
def scrape():
    weather = scrape_info.scrape_weather()
    surf = scrape_info.scrape_surf()

    # Combine results into one dictionary
    forecast = {
        'location': weather['location'],
        'date': weather['date'],
        'max_temp': weather['max_temp'],
        'min_temp': weather['min_temp'],
        'surf_spot': surf['surf_spot'],
        'surf_height': surf['surf_height'],
    }

    # Insert forecast into database
    collection.insert_one(forecast)

    # Redirect back to home page
    return redirect('/', code=302)

if __name__ == '__main__':
    app.run(debug=True)
