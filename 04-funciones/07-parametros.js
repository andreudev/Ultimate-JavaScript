/**
 * {
 * url:...
 * bucket:Amazon S3
 * port: 3000
 * }
 */

const config = {
  url: "http://localhost",
};

function configurarAPI(url, bucket = 145, port = 3000) {
  //   const defaultURL = url || "http://localhost";
  return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI());
console.log(configurarAPI("http://platzi.com"));
