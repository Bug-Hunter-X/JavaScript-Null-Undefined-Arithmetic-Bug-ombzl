function foo(a, b) {
  if (a === null || a === undefined || isNaN(a) || b === null || b === undefined || isNaN(b)) {
    return 0; // Or handle the case appropriately
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo(undefined,2)); // 0
console.log(foo(1,NaN)); //0