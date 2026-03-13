// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function fetchdata(link) {
  return fetch(link).then((res) => res.json());
}
