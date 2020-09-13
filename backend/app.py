import flask
from flask import Flask
from flask import jsonify

import json

app = Flask(__name__)

@app.route('/')
def hello_world():
    return jsonify(message="Helllo world")

@app.route('/<username>')
def show_user_profile(username):
    return jsonify(message="good choice" , username=ume)


app.run('0.0.0.0' , 8000)
