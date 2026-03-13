
function asyncOperation1() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Async Operation 1 completed");
      res("Result of Operation 1");
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 2 completed");
      resolve("Result of Operation 2");
    }, 1000);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 3 completed");
      resolve("Result of Operation 3");
    }, 1000);
  });
}

async function performAsyncOperations() {
  try {
    const result1 = await asyncOperation1();
    console.log(result1);

    const result2 = await asyncOperation2();
    console.log(result2);

    const result3 = await asyncOperation3();
    console.log(result3);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
performAsyncOperations();