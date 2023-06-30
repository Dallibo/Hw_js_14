// function formatStr() {
//     let str = arguments[0];
//     let reg1 = /%\d+/g;
//     let arr = str.split(reg1);
//     let elems = str.match(reg1);
//     let indexes = elems.map(val => val.replace("%", ""));
//     let res = "";
//     for (let i = 0; i < arr.length; i++) {
//       res += arr[i];
//       if (indexes[i] !== undefined) {
//         res += arguments[Number(indexes[i])];
//       }
//     }
//     return res;
//   }
  
//   let res1 = formatStr("Сегодня %1 %2.%3.%4", "понедельник", 10, 8, 2020);
//   console.log(res1);
  
//   function numberToText(number) {
//     const units = [
//       '', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
//       'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать',
//       'восемнадцать', 'девятнадцать'
//     ];
//     const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
  
//     if (number < 20) {
//       return units[number];
//     } else {
//       const digit1 = Math.floor(number / 10);
//       const digit2 = number % 10;
//       return tens[digit1] + ' ' + units[digit2];
//     }
//   }
  
//   console.log(numberToText(35));
//   console.log(numberToText(89));
//   console.log(numberToText(12));
  
  

//   let string = prompt("Enter a string");
// function transformString(string) {
//     let result = '';
//     for (let i = 0; i < string.length; i++) {
//       const char = string[i];
//       if (char.match(/[A-Z]/)) {
//         result += char.toLowerCase();
//       } 
//       else if (char.match(/[a-z]/)) {
//         result += char.toUpperCase();
//       } 
//       else if (char.match(/[0-9]/)) {
//         result += '_';
//       } 
//       else {
//         result += char;
//       }
//     }
//     return result;
//   }
  
//   let newResult = transformString(string);
//   alert(newResult);
  
//   function convertToCamelCase(cssStyle) {
//     return cssStyle.replace(/-([a-z])/g, function(match, letter) {
//       return letter.toUpperCase();
//     });
//   }
//   console.log(convertToCamelCase('font-size'));
// console.log(convertToCamelCase('background-color'));
// console.log(convertToCamelCase('text-align'));


// function createAbbreviation(phrase) {
//   const words = phrase.split(' ');
//   const abbreviation = words.map(word => word.charAt(0).toUpperCase()).join('');
//   return abbreviation;
// }
// console.log(createAbbreviation('cascading style sheets'));
// console.log(createAbbreviation('об’єктно-орієнтоване програмування'));


// function concatenateStrings(...strings) {
//   return strings.join('');
// }
// console.log(concatenateStrings('Hello', 'all', ' ', 'world', '!'));


function calculator(expression) {
  const operands = expression.split(/[-+*/]/);
  const operator = expression.match(/[-+*/]/)[0];

  const num1 = parseFloat(operands[0]);
  const num2 = parseFloat(operands[1]);

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  return result;
}

const expression = "5+4";
const result = calculator(expression);
console.log(result);
