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
  