class Animal {
  constructor(name, health = 90, species, className, parentElement) {
    this._name = name
    this._species = species
    this._class = className
    this._parentElement = parentElement || document.body
    this._health = health

    this.createElement()
    this._parentElement.appendChild(this._element)

    this._element.addEventListener("click", this.feed.bind(this))
  }

  createElement() {
    this._element = document.createElement("div")
    this._element.classList.add(this._class)
    this._element.dataset.health = this._health

    return this
  }

  get element() {
    if (this._element) return this._element

    this._element = document.createElement("div")
    this._element.classList.add(this._class)
    this._element.dataset.health = this._health
    
    return this._element
  }

  set element(element) {
    return (this._element = element)
  }

  setHealth(newValue, maxValue = 100) {
    this._health = newValue
    if (this._health > 100) this._health = maxValue
    this._element.dataset.health = this._health
  }

  feed() {
    this.setHealth(parseInt(this._element.dataset.health) + 10)
    console.info(`${this._name} has been fed, and is now at ${this._health} health.`)

    return this._health
  }
}

const frankieThePug = new Animal("Frankie the Pug", 60, "dog", "animal", document.getElementById("dogKennel"));
