const config = ["http://localhost", 145, 3000];

function webserver([url, port, bucket]) {
  return url + ":" + port + "/" + bucket;
}

console.log(webserver(config));
