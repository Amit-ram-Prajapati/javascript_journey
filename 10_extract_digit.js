 // Extract Digits from a Given Number
let num = 789;
let pos = 0;
let temp = num;
while (num != 0) {
  num = parseInt(num / 10);
  pos++;
}
while (temp != 0) {
  let digit = parseInt(temp % 10);
  temp = parseInt(temp / 10);
  console.log(`Digit at position ${pos} : is ${digit}`);
  pos--;
}
