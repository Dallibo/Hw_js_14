function formatStr() {
    let str = arguments[0];
    let reg1 = /%\d+/g;
    let arr = str.split(reg1);
    let elems = str.match(reg1);
    let indexes = elems.map(val => val.replace("%", ""));
    let res = "";
    for (let i = 0; i < arr.length; i++) {
      res += arr[i];
      if (indexes[i] !== undefined) {
        res += arguments[Number(indexes[i])];
      }
    }
    return res;
  }
  
  let res1 = formatStr("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
  console.log(res1)
  function numberToText(number) {
    const units = [
      '', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять', 'десять',
      'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять',
      'вісімнадцять', 'дев\'ятнадцять'
    ];
    const tens = ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];
    
    if (number < 20) {
      return units[number];
    } else {
      const digit1 = Math.floor(number / 10);
      const digit2 = number % 10;
      return tens[digit1] + ' ' + units[digit2];
    }
  }
  console.log(numberToText(35)); 
  console.log(numberToText(89));
  console.log(numberToText(12));
  

  let string = prompt("Enter a string");
function transformString(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.match(/[A-Z]/)) {
        result += char.toLowerCase();
      } 
      else if (char.match(/[a-z]/)) {
        result += char.toUpperCase();
      } 
      else if (char.match(/[0-9]/)) {
        result += '_';
      } 
      else {
        result += char;
      }
    }
    return result;
  }
  
  let newResult = transformString(string);
  alert(newResult);
  
  