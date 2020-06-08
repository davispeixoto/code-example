class Animal {
  constructor(name, species, health = 90, class, parentElement) {
    this.name = name
    this.species = species
    this.class = class
    this.parentElement = parentElement || document.body

    this.bark = () => {
      console.log(`${this.name} says woof woof!`);
    }

    this.createElement()
    this.parentElement.appendChild(this.element)
    this.element.addEventListener("click", this.feed)
  }

  get element() {
    if (this.element) return this.element
    
    this.element = document.createElement("div")
    this.element.classList.add(this.class)
    this.element.dataset.health = this.health

    return this.element
  }

  set element(element) {
    this.element = element
    return this.element
  }

  feed() {
    this.setHealth(this.element.dataset.health + 10)
    console.info(`${this.name} has been fed, and is now at ${this.health} health.`)

    return this.health
  }

  createElement: function() {
    this.element = document.createElement("div")
    this.element.classList.add(this.class)
    this.element.dataset.health = this.health

    return this
  }

  function setHealth(newValue, maxValue = 100) {
    this.health = newValue
    if (this.health > 100) this.health = maxValue
    this.element.dataset.health = this.health
  }
}

const frankieThePug = new Animal("Frankie the Pug", "dog", 60, "animal", document.getElementById("dogKennel"));
