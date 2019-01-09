# Import necessary libraries
from bs4 import BeautifulSoup as bs
from datetime import date
import requests

# Function to scrape for weather in Costa Rica
def scrape_weather():
    url = 'https://weather-and-climate.com/average-monthly-Rainfall-Temperature-Sunshine-fahrenheit,san-jose,Costa-Rica'

    # Scrape page into soup
    # YOUR CODE HERE

    # Get the max temp and min temp
    # YOUR CODE HERE

    # Store forecast data in dictionary
    forecast = {
        'location': 'Costa Rica',
        'date': str(date.today()),
        # YOUR CODE HERE
    }

    # Return results
    return forecast

# Function to scrape surf info
def scrape_surf():
    url = 'https://www.surfline.com/surf-reports-forecasts-cams/costa-rica/3624060'

    # Scrape page into soup
    # YOUR CODE HERE

    # Find today's surf conditions (location, surf height) for one location
    # YOUR CODE HERE

    # Store in dictionary
    surf = {
        # YOUR CODE HERE
    }

    # Return results
    return surf

