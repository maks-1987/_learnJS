/* let answer = prompt('Какое «официальное» название JavaScript?', '')
let mod_answer = answer.toLowerCase();
// console.log(answer)

const _ecmascript = 'ecmascript';

if (mod_answer == _ecmascript) {
    alert('Верно!')
} else {
    alert('Не знаете? ECMAScript!')
} */


/* let hour = 9;
let isWeekend = false;
if (hour < 10 || hour > 18 || isWeekend) {
    alert('Офис закрыт.'); // это выходной
} */


/* let question = prompt('Кто там?', '');
if (question == null) {
    alert('Отменено!')
} else if (question == 'admin') {
    let password = prompt('Password?')

    if (password == null) {
        alert('Отменено!')
    } else if(password == 'I Boss') {
        alert('Hello Boss!')
    } else {
        alert('Error password!')
    }

} else {
    alert('I do not know you')
} */


/* function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

let family = marry({
    name: 'John'
}, {
    name: 'Ann'
}); */

// ========== калькулятор ===============
/* let calculator = {
    sum() {
      return a + b;
    },
  
    mul() {
      return a * b;
    },
  
    read() {
      a = +prompt('a?', 0);
      b = +prompt('b?', 0);
    }
  };

  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };

// calculator.read()
// alert(calculator.sum());
// alert(calculator.mul());

let calculator_2 = calculator;
calculator_2.read()
alert(calculator_2.sum());
alert(calculator_2.mul());
 */


// Возможно ли создать функции A и B в примере ниже, где объекты равны 
// new A() == new B()?
// Можно, если будет return одного и тогоже объекта
/* let obj = {}

function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A;
let b = new B;

alert(a == b); // true */


// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах
// объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
function Calculator() {
  this.read = function () {
    this.firstValue = +prompt('первое число', 0);
    this.twoValue = +prompt('второе число', 0);
  }

  this.sum = function () {
    return this.firstValue + this.twoValue;
  }

  this.mul = function () {
    return this.firstValue * this.twoValue;
  }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
