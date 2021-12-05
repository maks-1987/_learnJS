//   ================ Map & Set =====================
let john = {
  name: 'john',
};

let visitsMap = new Map();

visitsMap.set(john, 1111);

console.log(visitsMap.get(john));

visitsMap.set(NaN, 'it is NaN!!!').set(1, '1').set('2', 2);

console.log(visitsMap.get(NaN));

for (let visitsKey of visitsMap.keys()) {
  console.log(visitsKey);
}

for (let visitsValue of visitsMap.values()) {
  console.log(visitsValue);
}

// for(let visitsEntry of visitsMap.entries()) {
for (let visitsEntry of visitsMap) {
  console.log(visitsEntry);
}

visitsMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

/* Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся
значений массива arr. 
*/
function unique(arr) {
  /* ваш код */
  return Array.from(new Set(arr));
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(values)); // Hare,Krishna,:-O

/* Анаграммы – это слова, у которых те же буквы в том же количестве, 
но они располагаются в другом порядке.

nap - pan
ear - are - era
cheaters - hectares - teachers

Напишите функцию aclean(arr), которая возвращает массив слов, 
очищенный от анаграмм. 
 */
function aclean(arr) {
  let words = new Map();

  for (let word of arr) {
    // разбив слово на буквы, сортируем по алфав и объединяем снова в одно слово
    let sortWord = word.toLowerCase().split('').sort().join('');
    words.set(sortWord, word);
  }

  return Array.from(words.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

//   ================= WeakMap & WeakSet ===============
