function bunnyEars(n) {
  if (n === 0 ) {
    return 0;
  } else {
    return 2 + bunnyEars(n - 1);
  }
}


console.log(bunnyEars(8))
