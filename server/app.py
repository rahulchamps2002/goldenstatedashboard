from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

BASE_URL = "https://www.thesportsdb.com/api/v1/json/123"
TEAM_ID = "134865"

@app.route('/')
def home():
    return "Dashboard is working!"

@app.route('/api/team')
def get_team():
    url = 'https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Golden%20State%20Warriors'
    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({'error': 'Failed to fetch team data'}), 500

    return jsonify(response.json())

@app.route('/api/players')
def get_players():
    res = requests.get(f"{BASE_URL}/lookup_all_players.php?id={TEAM_ID}")
    return jsonify(res.json())

@app.route('/api/games')
def get_games():
    res = requests.get(f"{BASE_URL}/eventslast.php?id={TEAM_ID}")
    return jsonify(res.json())

if __name__ == '__main__':
    app.run(debug=True)