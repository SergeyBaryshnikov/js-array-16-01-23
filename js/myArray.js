// Написати функцію, яка приймає масив чисел
// і повертає true, якщо в цьому масиві є два однакових числа поспіль
// Якщо не має - повертає false, якщо масив порожній - теж повертає false

/**
 *
 * @param {[number]} array
 * @returns {boolean}
 */
function compareNextValue(array) {
  if (array.length < 2) {
    return false;
  }
  for (let index = 1; index < array.length; index++) {
    if (array[index] === array[index - 1]) {
      return true;
    }
  }
  return false;
}

console.log(compareNextValue([0, 0]));

// function MyArrayPrototype() {
//   this.push = function () {
//     for (let index = 0; index < arguments.length; index++) {
//       this[this.length++] = arguments[index];
//       //   ++this.length;
//     }
//     return this.length;
//   };
//   this.pop = function () {
//     if (this.length === 0) {
//       return;
//     }
//     const lastItem = this[this.length - 1];
//     delete this[--this.length];
//     // this.length--;
//     return lastItem;
//   };
// }

// function MyArray() {
//   this.length = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     this.push(arguments[index]);
//   }
// }

// MyArray.prototype = new MyArrayPrototype();

// const myArrayNumbers = new MyArray();
// myArrayNumbers.push(777);
// console.log(myArrayNumbers);

// const arrayNumbers = [];
// arrayNumbers.push(555);
// console.log(arrayNumbers);

// function isStringInArr(arr, string) {
//   return arr.includes(string);
// }

// console.log(isStringInArr([], "qw"));

// /**
//  *
//  * @param {[number]} arr
//  * @returns {number | null}
//  */
// function getAverage(array) {
//   if (array.length === 0) {
//     return null;
//   }
//   let summa = 0;
//   for (let index = 0; index < array.length; index++) {
//     summa += array[index];
//   }
//   return summa / array.length;
// }
// console.log(getAverage([4, 5, 6]));
