let text1 = 'a1b2d3x4z5'

let reg1 = /[a-z]/g

let result = text1.replace(reg1, 'Q')

console.log(result)

let text2 = 'a1B2d3X4Z5'

let reg2 = /[a-zA-Z]/g

let result2 = text2.replace(reg2, 'Q')

console.log(result2)