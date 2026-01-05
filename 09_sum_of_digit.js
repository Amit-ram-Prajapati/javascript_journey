let num = 789;
let sum = 0;
let temp = num;
while (num != 0) {
  let digit = num % 10; 
  sum = parseInt(sum + digit);
  num = num / 10;
}
console.log(`The sum of ${temp} is : ${sum}`);
