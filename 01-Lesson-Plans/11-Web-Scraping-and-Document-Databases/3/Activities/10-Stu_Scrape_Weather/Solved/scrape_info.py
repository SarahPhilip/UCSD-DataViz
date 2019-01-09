# Import necessary libraries
from bs4 import BeautifulSoup as bs
from datetime import date
import requests

# Function to scrape for weather in Costa Rica
def scrape_weather():
    url = 'https://weather-and-climate.com/average-monthly-Rainfall-Temperature-Sunshine-fahrenheit,san-jose,Costa-Rica'

    # Scrape page into soup
    html = requests.get(url).text
    soup = bs(html, 'html.parser')

    # Get the max temp and min temp
    max_temp = soup.find('span', class_='temp-max').text
    min_temp = soup.find('span', class_='temp-min').text

    # Store forecast data in dictionary
    forecast = {
        'location': 'Costa Rica',
        'date': str(date.today()),
        'max_temp': max_temp,
        'min_temp': min_temp,
    }

    # Return results
    return forecast

# Function to scrape surf info
def scrape_surf():
    url = 'https://www.surfline.com/surf-reports-forecasts-cams/costa-rica/3624060'

    # Scrape page into soup
    html = requests.get(url).text
    soup = bs(html, 'html.parser')

    # Find today's surf conditions (location, surf height) for one location
    surf_spot = soup.find('h3', class_='sl-spot-details__name').text
    surf_height = soup.find('span', class_='quiver-surf-height').text

    # Store in dictionary
    surf = {
        'surf_spot': surf_spot, 
        'surf_height': surf_height,
    }

    # Return results
    return surf

