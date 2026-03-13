// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delayof2sec(func) {
  setTimeout(func, 2000);
}
function consol_log() {
  console.log("hello world");
}
delayof2sec(consol_log);

/////

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

// Usage:
delay().then(() => console.log("Executed after 2 seconds"));