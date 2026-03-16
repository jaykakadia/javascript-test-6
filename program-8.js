// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchWithTimeout(url, timeoutMs) {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Request took too long!"));
    }, timeoutMs);
  });
  return Promise.race([fetch(url), timeout]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));