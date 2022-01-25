const x = 6

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function add2nums(num1, num2){
  return num1 + num2 + x
}
console.log("Question 7 Running: ", add2nums(1,2))

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const addNums = (num1, num2) => {
  return num1 + num2 + x;
}
console.log("Question 8 Running: ", addNums(4, 5));

// 9. Write a function that returns another function. (use arrow functions please)
const returnFunction = () => {
	return addNums;
};
console.log("Question 9 Running: ", returnFunction()(4, 5));

// 10. given the following code:


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.



// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}


