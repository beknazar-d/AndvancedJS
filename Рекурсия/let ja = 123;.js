let ja = 123;
let arr = Array.from(String(ja), Number);
console.log(arr);
let res = 0;
for (let i = 0; i < arr.length; i++) {
  res += arr[i];
}

const sumOfDigits = (n) => {
  let arr = Array.from(String(n), Number);
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};
console.log(sumOfDigits(456));
function sumOfDigitsRecursive(n) {
  // Базовый случай: если число состоит из одной цифры, вернуть это число
  if (n < 10) {
    return n;
  } else {
    // Иначе, вернуть сумму первой цифры и результата вызова функции для оставшейся части числа
    return (n % 10) + sumOfDigitsRecursive(Math.floor(n / 10));
  }
}

console.log(sumOfDigitsRecursive(503));
