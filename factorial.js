function factorial(num) {
  if (num === 1) {
    return 1
  } else {
    return factorial(num - 1) * num;
  }
}




console.log(factorial(4));
