class Restaurants {
  #timetable;
  constructor(name) {
    this.name = name;
  }

  get timetable() {
    return this.#timetable;
  }
  set timetable(value) {
    let date = new Date(value);
    let time = date.getTime();
    if (Number.isNaN(time)) {
      throw new Error("Horario inválido");
    }

    this.#timetable = date;
  }
}

const r = new Restaurants("McDonald's");

r.timetable = "1 apr 2021";

console.log(r);
console.log(r.timetable);
