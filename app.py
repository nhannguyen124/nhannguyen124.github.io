from flask import Flask, jsonify, request, send_from_directory
import random
import string

app = Flask(__name__)

def generate_api_key(length=16):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

api_keys = []

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/get-key', methods=['GET'])
def get_key():
    new_key = generate_api_key()
    api_keys.append(new_key)
    return jsonify({"api_key": new_key})

@app.route('/all-keys', methods=['GET'])
def all_keys():
    return jsonify({"api_keys": api_keys})

if __name__ == '__main__':
    app.run(debug=True)
