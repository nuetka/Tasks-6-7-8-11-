function sum(a) {

    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
  
  }
  
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1) ); // 4