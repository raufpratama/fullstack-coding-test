// let inputA = [1, 2, 3, 4, 5]
// let inputB = [2, 3, 4, 5, 6]
// intersection = [2, 3, 4, 5] --> expected output


let inputA = [9, 8, 3, 4, 5]
let inputB = [2, 7, 4, 9, 1, 0]
// intersection = [4, 9] --> expected output

const intersect = (a, b) => {
  let result = [] // O(1)
  a.sort((x,y) => x - y) // --> depend on the browser, firefox using merge sort which have :O(n log n) time complexity, otherwise, chrome 70 uses timesort which have O(n) time complexity 
  b.sort((x,y) => x - y)

  while (a.length > 0 && b.length > 0) { // O(n)
    if(a[0] < b[0]) {
      a.shift() // O(n)
    } else if(a[0] > b[0]) {
      b.shift() // O(n)
    } else {
      result.push(a.shift()) // O(1)
      b.shift() // O(n)
    }
  }
  return result
}

console.log(intersect(inputA, inputB))