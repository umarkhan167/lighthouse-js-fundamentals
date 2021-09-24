const amounts = [61.00, 52.25, 112.99, 5.00]; 

//regular for loop
const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);


//for..of loop
const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);


// The for..of loop is the preferred method because the "amount" variable makes using each item in the array collectively more efficient. 


//In summary, the for..of loop is ...

//1. A modern (newer) feature in JavaScript
//2. Simpler than the regular for loop
//3. But also less powerful than the regular for loop
//4. Only really useful for going through an entire array from beginning to end
//5. Not a solution to all our looping problems
