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
    return jesonify()


app.run('localhost' , 8000)
