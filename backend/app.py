import flask
from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

import json

app = Flask(__name__)

@app.route('/')
@cross_origin(supports_credentials=True)
def hello_world():
    return jsonify(message="Hello world")


@app.route('/<username>')
@cross_origin(supports_credentials=True)
def show_user_profile(username):
    return jsonify(message="good choice" , username=username)


app.run('localhost' , 8000)
