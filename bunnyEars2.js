function bunnyEars2(n) {
  if (n === 0) {
    return 0;
  } else if (n % 2 === 0) {
    return 3 + bunnyEars2(n - 1);
  } else {
    return 2 + bunnyEars2(n - 1);
  }
}

console.log(bunnyEars2(2));
