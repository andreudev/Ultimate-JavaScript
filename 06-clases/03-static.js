class Restaurants {
  constructor(name) {
    this.name = name;
  }

  getTimetable() {
    console.log(`${this.name} abre de 9:00 a 21:00`);
  }

  static getRestaurant(id) {
    return new Restaurants("McDonald's");
  }
}

const r = Restaurants.getRestaurant(1);

console.log(r);
