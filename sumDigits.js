function sumDigits(n) {
  if (n.toString().length === 1) {
    return n % 10;
  } else {
    var numDigits = n.toString().length;
    return Math.floor(n / Math.pow(10, numDigits - 1)) + sumDigits(n - 1);

  }
}


console.log(sumDigits());
