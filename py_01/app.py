from flask import Flask, request, redirect
from flask import render_template
from product import Product, ProductRepository

app = Flask(__name__)

@app.route('/')
def list_products():
    repo = ProductRepository('products.json')
    products = repo.list()
    return render_template('products.html', products=products)

@app.route('/product', methods=['GET', 'POST'])
def insert_product():
    if request.method = 'POST':
        product = Product(request.data.name, request.data.price, request.data.categories)
        repo = ProductRepository('products.json')
        repo.write(product)
        return redirect('/product/'+product.name)
    else:
        return render_template('form.html')

@app.route('/product/<name>')
def get_product(name):
    repo = ProductRepository('products.json')
    product = repo.get_by_name(name)
    return render_template('detail.html', product=product)
