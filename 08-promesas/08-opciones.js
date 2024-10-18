const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url, {
  method: "POST", // GET, POST, PUT, DELETE, PATCH.
  body: JSON.stringify({
    title: "Hola mundo",
  }),
  headers: {
    "Content-Type": "application/json",
    Authorization: "apikey",
  },
  cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
})
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
