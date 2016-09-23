function sumDigits1(n) {
  if (n < 10) {
    return n % 10;
  } else {
    var leftMost = parseInt(n.toString().slice(0,1));
    var restRight = parseInt(n.toString().slice(1));
    return leftMost + sumDigits1(restRight);
  }
}

// there is a "cooler" way to do this, with % and /

console.log(sumDigits2(13));
