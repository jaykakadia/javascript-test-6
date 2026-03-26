// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const url1 = "https://jsonplaceholder.typicode.com/posts/1";
const url2 = "https://jsonplaceholder.typicode.com/posts/2";
const url3 = "https://jsonplaceholder.typicode.com/posts/3";

const arrOfUrls = [url1, url2, url3];

function fetchAllData(arr) {
  const promis = [];
  for (let i = 0; i < arr.length; i++){
    const url = arr[i];
    promis.push(fetch(url).then((res) => res.json()));
  }
  return Promise.all(promis);
}

fetchAllData(arrOfUrls)
  .then((allData) => {
    console.log(allData);
  })
  .catch((err) => {
    console.log(err);
  });
