const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url, {})
  .then((response) => {
    if (!response.ok) return Promise.reject(response.status);
    return response.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((message) => {
    console.log({ message });
  });
