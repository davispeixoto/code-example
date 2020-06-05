from flask import Flask, request
from flask import render_template
from product import Product

app = Flask(__name__)

@app.route('/')
def form():
    return render_template('form.html')

@app.route('/product', methods=['GET', 'POST'])
def insert_product():
    if request.method = 'POST':
        product = Product(request.data.name, request.data.price, request.data.categories)
        product_writer(Product);
    else:
        return render_template('form.html')
