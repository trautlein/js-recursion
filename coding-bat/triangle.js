function triangle(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + triangle(n - 1);
  }
}

console.log(triangle(0));
console.log(triangle(1));
console.log(triangle(2));
console.log(triangle(4));
console.log(triangle(10));
