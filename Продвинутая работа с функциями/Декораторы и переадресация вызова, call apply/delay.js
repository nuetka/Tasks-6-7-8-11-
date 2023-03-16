function delay(f, ms) {// декоратор

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

// обёртки
let f1000 = delay(console.log, 1000);
let f1500 = delay(console.log, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс