// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
function fetchDataWithRetry(url, retries) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      if (retries > 0) {
        console.log(`Retrying... (${retries} attempts left)`);
        return fetchDataWithRetry(url, retries - 1);
      } else {
        throw new Error("Max retries reached. " + error.message);
      }
    });
}


fetchDataWithRetry("https://api.example.com/data", 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));