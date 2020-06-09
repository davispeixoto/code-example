from flask import Flask, request, redirect
from flask import render_template
from product import Product, ProductRepository
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config['DEBUG'] = os.getenv('DEBUG') == '1'
app.config['FLASK_ENV'] = os.getenv('FLASK_ENV')

import views

