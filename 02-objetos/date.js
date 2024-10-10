const now = new Date();
console.log(now);

const date1 = new Date('May 11 2018 09:00 GMT-0300');
console.log(date1);

const date2 = new Date(2018, 4, 11, 9);
console.log(date2);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toISOString());

console.log(now.getTime());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());