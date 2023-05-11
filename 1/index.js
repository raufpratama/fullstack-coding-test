// let inputA = [1, 2, 3, 4, 5]
// let inputB = [2, 3, 4, 5, 6]
// intersection = [2, 3, 4, 5] --> expected output


let inputA = [9, 8, 3, 4, 5]
let inputB = [2, 7, 4, 9, 1, 0]
// intersection = [4, 9] --> expected output

const intersect = (a, b) => {
  let result = []
  a.sort((x,y) => x - y)
  b.sort((x,y) => x - y)

  while (a.length > 0 && b.length > 0) {
    if(a[0] < b[0]) {
      a.shift()
    } else if(a[0] > b[0]) {
      b.shift()
    } else {
      result.push(a.shift())
      b.shift()
    }
  }
  return result
}

console.log(intersect(inputA, inputB))
