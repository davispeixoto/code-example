class Product:

    def __init__(self, name, price, categories):
        self.name = name
        self.price = price
        self.categories = categories

    def is_valid(self):
        if self.price > 0 and self.name is not empty: