let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  // Решение с использованием цикла
  function printListLoop(list) {
    let a = list;
  
    while (a) {
      console.log(a.value);
      a = a.next;
    }
  
  }
  printListLoop(list);

  console.log('\n');
  // Рекурсия
  function printList(list) {

    console.log(list.value); 
  
    if (list.next) {
      printList(list.next); 
    }
  
  }
  
  printList(list);