
// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.
// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
// Submit the github link to the code


function add(a, b, callback) {
    const result = a + b;
    callback(result); // Calling the callback with the result
  }
  
  // Using the function with a callback
  add(5, 3, function(sum) {
    console.log("The sum is:", sum);
  });

  
  const getInitials = (firstName, lastName) => {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase();
  };
  
  
  console.log(getInitials("Roger", "Waters")); 
  