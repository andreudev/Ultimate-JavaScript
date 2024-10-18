let iterador = {
  currentValue: 1,
  next() {
    let result = {
      value: null,
      done: false,
    };

    if (this.currentValue > 0 && this.currentValue <= 5) {
      result = {
        value: this.currentValue,
        done: false,
      };
      this.currentValue++;
    } else {
      result = {
        done: true,
      };
    }
    return result;
  },
};

let item = iterador.next();
while (!item.done) {
  console.log(item.value);
  item = iterador.next();
}
