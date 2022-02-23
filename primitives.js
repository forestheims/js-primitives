// const string =
//   "The red fox is cute. The water dragon and the fox like to play.";

// const letters = string.split("");

// const words = string.split(" ");

// function reverseWords(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => {
//       return word.split("").reverse().join();
//     })
//     .join();
// }

// const string = "Hello I am a FOX";
// // not finished
// function titleCase(sentence) {
//   return sentence.split(" ").map((word) => {
//     const firstLetter = word[0].toUpperCase();
//     return firstLetter + word.split("").slice(1);
//   });
// }

// console.log(titleCase(string));

// oddish or evvenish

// function isEven(number) {
//   if (number % 2 === 0) {
//     return "Evenish";
//   } else {
//     return "oddish";
//   }
// }

// function oddishOrEvenish(number) {
//   const string = number
//     .toString()
//     .split("")
//     .map((string) => {
//       return Number(string);
//     })
//     .reduce((previous, current) => previous + current, 0);
//   return isEven(string);
// }

// const fruit = ["bananas", "kiwis", "mangoes"];

// function at(array, index) {
//   if (index < 0) {
//     return array[+array.length + +index];
//   }
//   return array[index];
// }

// console.log(at(fruit, -1));

// length = 3;
// index = 2;

// function fizzBuzz(number) {
//   const numbersArr = [];
//   for (i = 1; number >= i; i++) {
//     numbersArr.push(i);
//   }
//   console.log(numbersArr);
//   return numbersArr;
// }
// fizzBuzz(5);

function uniqueString(strings) {
  return strings
    .map((string) => {
      return string
        .split("")
        .map((character) => character.toLowerCase())
        .sort()
        .join("");
    })
    .sort()[strings.length - 1];
}

const stringsTest = ["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"];

console.log(uniqueString(stringsTest));
