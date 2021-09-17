from flask import Flask, jsonify, request, render_template, json,  send_from_directory
import reverse_geocoder as rg

app = Flask(__name__, static_url_path='')

@app.route('/')
def home_page():
    return send_from_directory("static/", 'index.html') 
    

@app.route('/geo', methods=['POST'])
def getGeo():
  dat = {
  'lat': request.json['lat'],
  'long':request.json['long']
  }
  coordinates = (dat["lat"], dat["long"])
  results = rg.search(coordinates)
  geo_data = results[0]
  city = geo_data["admin1"]
  print(city)
  return geo_data

# run app  
# app.run(debug=True)
