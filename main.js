function Animal (name, health = 90, species, class, parentElement) {
  this.name = name
  this.species = species
  this.class = class
  this.parentElement = parentElement || document.body

  this.createElement()
  this.parentElement.appendChild(this.element)

  this.element.addEventListener("click", this.feed)
}

Animal.prototype.createElement = function () {
  this.element = document.createElement("div")
  this.element.classList.add(this.class)
  this.element.dataset.health = this.health

  return this
}

Animal.prototype = {

  constructor: Object,

  get element () {
    if (this.element) return this.element

    this.element = document.createElement("div")
    this.element.classList.add(this.class)
    this.element.dataset.health = this.health
    
    return this.element
  },

  set element (element) {
    return (this.element = element)
  },

  setHealth: function (newValue, maxValue = 100) {
    this.element.dataset.health = this.health = Math.min(newValue, maxValue)
  },

  feed: function () {
    const oldHealth = this.health
    this.setHealth(this.element.dataset.health + 10)
    console.info(`${this.name} has been fed, and recovered ${this.health - oldHealth} health.`)

    return this.health
  },

}

const frankieThePug = new Animal("Frankie the Pug", 60, "dog", "animal", document.getElementById("dogKennel"))