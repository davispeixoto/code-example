import json


class Product:
    def __init__(self, name, price, categories):
        self.name = name
        self.price = price
        self.categories = categories

    def is_valid(self):
        if self.price > 0 and self.name:
            return True

        return False

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True)


class ProductRepository:
    def __init__(self, filename):
        self.filename = filename

    def write(self, product):
        writer = open(self.filename, "a+")
        try:
            if product.is_valid():
                writer.write(product.to_json())
        finally:
            writer.close()

    def list(self):
        reader = open(self.filename, "r")
        output = []
        try:
            for line in reader.readlines():
                product = self.create_product_from_line(line)
                output.append(product)
        finally:
            reader.close()

        return output

    def create_product_from_line(self, line_data):
        data = json.loads(line_data)
        output = Product(data.name, data.price, data.categories)
        return output

    def get_by_name(self, name):
        for product in self.list():
            if name == product.name:
                return product
