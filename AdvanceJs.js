//! Event Propagation
//* event propagation is the way events are handled in the DOM. It consists of two phases: capturing and bubbling.
//* capturing phase: the event starts from the root and goes down to the target element.
//* bubbling phase: the event starts from the target element and goes up to the root.
//* target phase: the event is handled at the target element itself.
//! Event Delegation
//* event delegation is a technique that allows you to handle events on a parent element instead of individual child elements.
//* for example if you have a list of items and you want to handle click events on each item, you can attach the event listener to the parent element and use event delegation to handle the events on the child elements.
//! First Class Functions
//* first class functions are functions that can be treated as values. This means you can pass them as arguments to other functions, return them from functions, and assign them to variables.
//! Higher Order Functions
//* higher order functions are functions that take other functions as arguments or return functions as their result. They are a key feature of functional programming.
//! Callback Functions
//* callback functions are functions that are passed as arguments to other functions and are executed after the completion of the parent function.
//! Callback hell
//* callback hell is a situation where you have multiple nested callbacks, making the code hard to read and maintain. It can be avoided by using promises or async/await.
//! Fetch API
//* the fetch API is a modern way to make network requests in JavaScript. It returns a promise that resolves to the response of the request.
//? how to fetch api step by step
//* 1. use the fetch() function to make a request to the API endpoint.
//* 2. use the .then() method to handle the response.
//* 3. use the .json() method to parse the response as JSON.
//TODO example of fetch API
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) =>
//     console.error("There was a problem with the fetch operation:", error)
//   );

//! Promises
//* promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
//* Basically It is like a placeholder for the result of an asynchronous operation.
//? Promise => Pending => Setlled in that there is two situation resolved or rejected
//TODO promis has built-in methods like then and catch to handle the resolved and rejected states respectively.
//? then() is used to handle the resolved state of a promise, and it takes a callback function as an argument.
//? catch() is used to handle the rejected state of a promise, and it also takes a callback function as an argument.
