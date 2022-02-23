const string1 =
  "The red fox is cute. The water dragon and the fox like to play.";

const letters = string1.split("");
console.log("letters:", letters);

const words = string1.split(" ");
console.log("words:", words);

// Reverse Words

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

console.log("reverseWords:", string1, "=>", reverseWords(string1));

// Title Case

const string2 = "Hello I am a FOX";

function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      const firstLetter = word[0].toUpperCase();
      console.log("firstLetter", firstLetter);
      const newWord = [];
      word
        .split("")
        .slice(1)
        .map((letter) => newWord.push(letter.toLowerCase()));
      // not finished
      // magic function newWord.unshift(firstLetter) ((unshift() is not working for some reason. makes newWord === newWord.length))
      return newWord;
    })
    .join(" ");
}

console.log("titleCase:", string2, "=>", titleCase(string2));

// Oddish or Evenish

function isEven(number) {
  if (number % 2 === 0) {
    return "Evenish";
  } else {
    return "oddish";
  }
}

function oddishOrEvenish(number) {
  const string = number
    .toString()
    .split("")
    .map((string) => {
      return Number(string);
    })
    .reduce((previous, current) => previous + current, 0);
  return isEven(string);
}

console.log(
  "oddishOrEvenish:",
  1234,
  "=>",
  oddishOrEvenish(1234),
  1233,
  "=>",
  oddishOrEvenish(1233)
);

// Array.prototype.at()

const fruit = ["bananas", "kiwis", "mangoes"];

function at(array, index) {
  if (index < 0) {
    return array[+array.length + +index];
  }
  return array[index];
}

console.log("at:", fruit, -1, "=>", at(fruit, -1));

// fizzBuzz

function fizzBuzz(number) {
  const numbersArr = [];
  for (i = 1; number >= i; i++) {
    // not finished
    // if statement here to check if number is divisible by 3 or 5 or both
    // if so return fizz or buzz or fizzbuzz
    // else:
    numbersArr.push(i);
  }
  return numbersArr;
}

console.log("fizzBuzz:", 14, "=>", fizzBuzz(14));

// Anagrams

// Unique Strings

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

console.log("uniqueString:", stringsTest, "=>", uniqueString(stringsTest));

// Unique Character

// Equal Sides

// Happy Numbers
