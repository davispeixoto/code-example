from manage import app
from product import Product, ProductRepository
from flask import request, redirect
from flask import render_template


@app.route('/./')
def list_products():
    repo = ProductRepository('products.json')
    products = repo.list()
    return render_template('products.html', products=products)
