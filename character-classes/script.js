let reg1 = /[abc]/g

let text = 'a1b2c3d4e5'

let result1 = text.replace(reg1, 'X')

console.log(result1)

let reg2 = /[^abc]/g
let result2 = text.replace(reg2, 'X')
console.log(result2)