// removes an element from the array at the index
// do not use any index array methods like [].splice()
// [].pop [].push or anything.
// you're only allowed to use a[i], and a[i] = "foo"
//
//        input: remove([32, 65, 89, 43], 0)
// intermediate: [null, 65, 89, 43]
//       result:[65, 89, 43]
// set the index given to null
// write a for loop that shifts all other values over to fill the now null space
// manually adjust .length of the array to be one less
```
function remove(arr, index) {
  return arr;
}

console.log("Expected:", [23, 75, 76])
console.log("  Actual:", remove([23, 45, 75, 76], 1))
```