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

  // цикл
  function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
  
  printReverseList(list);

  console.log('\n');

  // рекурсия
  function printReverseListRec(list) {

    if (list.next) {
      printReverseListRec(list.next);
    }
  
    console.log(list.value);
  }
  
  printReverseListRec(list);