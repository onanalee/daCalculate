from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request, json
from bson import json_util

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbdacalculate

@app.route('/')
def home():
    return render_template('index.html')
@app.route('/kr')
def home_kr():
    return render_template('indexKR.html')
@app.route('/random_generator')
def random():
    return render_template('randomGenerator.html')
@app.route('/lotto')
def lotto():
    return render_template('lotto.html')
@app.route('/time')
def time():
    return render_template('time.html')
@app.route('/timezone')
def timezone():
    return render_template('timezone.html')
@app.route('/exchange_rates')
def exchangeRates():
    return render_template('exchangeRates.html')
@app.route('/inflation')
def inflation():
    return render_template('inflation.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)