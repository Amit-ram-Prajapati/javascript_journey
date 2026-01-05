let num = 20,
  num1 = 30;
console.log(`Before swapping numbers are ${num} ${num1}`);
num = num + num1; // 20 + 30 = 50
num1 = num - num1; // 50-30 = 20
num = num - num1; // 50 - 20 = 30
console.log(`After swapping numbers are ${num} ${num1}`);
