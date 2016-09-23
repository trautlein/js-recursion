function count7(n, count) {
  var count = count || 0;
  if (n === 0) {
    return 0;
  } else if (n % 10 === 7) {
    return 1 + count7(Math.floor(n / 10));
  } else {
    return count7(Math.floor(n / 10));
  }
}

console.log(count7(74477));
