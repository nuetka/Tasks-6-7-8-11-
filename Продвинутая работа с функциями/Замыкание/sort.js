let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  users.sort(byField('name'));
  users.forEach(user => console.log(user.name)); // Ann, John, Pete
  
  console.log('\n');
  
  users.sort(byField('age'));
  users.forEach(user => console.log(user.name)); // Pete, Ann, John