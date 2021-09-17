from flask import Flask, jsonify, request, render_template, json
import reverse_geocoder as rg

app = Flask(__name__, static_url_path="/static", static_folder='/home/cleo/geo/static')

#coordinates = (51.5214588,-0.1729636),(9.936033, 76.259952),(37.38605,-122.08385)
#results = rg.search(coordinates) # default mode = 2
#first = results[0]
#print(first["admin1"])

@app.route('/')
def home_page():
    return app.send_static_file('index.html')
    

@app.route('/geo', methods=['POST'])
def getGeo():
  dat = {
  'lat': request.json['lat'],
  'long':request.json['long']
  }
  # apiDB.append(dat)
  #dat = request.json
  #pick1 = apiDB[1]
  #print(pick["id"])
  coordinates = (dat["lat"], dat["long"])
  results = rg.search(coordinates)
  geo_data = results[0]
  city = geo_data["admin1"]
  print(city)
  return geo_data

# run app  
# app.run(debug=True)
