// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

function asyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("operation 1");
      resolve();
    }, 1000);
  });
}
function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("operation 2");
      resolve();
    }, 1000);
  });
}
function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("operation 3");
      resolve();
    }, 1000);
  });
}
function asyncOperation4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("operation 4");
      resolve();
    }, 1000);
  });
}
function asyncOperation5() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("operation 5");
      resolve();
    }, 1000);
  });
}

const performOperations = async () => {
  await asyncOperation();
  await asyncOperation2();
  await asyncOperation3();
  await asyncOperation4();
  await asyncOperation5();
};

performOperations();
