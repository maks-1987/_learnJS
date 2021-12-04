/* 'use strict'

// console.log(window)

let obj = {
    test: undefined,
    test_2: 22
}

// console.log(test in obj) // RefferenceError
console.log('test' in obj)
console.log('test_2' in obj)

let user = {
    name: 'Max',
    age: 34,
    isDev: true,
}

for(let key in user) {
    console.log(key + ' --- ') // ключи - переменные объекта
    console.log(user[key]) // значения ключей - переменных объекта

}

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
  melon: 1,
};

console.log( bag.apple ); // 5, если fruit="apple"
console.log( bag.melon ); // 5, если fruit="apple"
 */

/* function checkAge(age) {
    /* if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
    return (age > 18) ? true : confirm('Roditeli razreshili?')

    // return (age > 18) || confirm('Родители разрешили?');
}

function pow(a, x) {
    return a ** x;
} */