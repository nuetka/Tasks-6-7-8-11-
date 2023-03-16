function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
  }
  
  function spy(func) {

    function wrapper(...args) {// прямо массив
      // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);// переадресация вызова
    }
  
    wrapper.calls = [];
  
    return wrapper; //обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
  }

  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }