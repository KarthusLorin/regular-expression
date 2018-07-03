let text = 'This is a boy'

let reg1 = /is/g

let reg2 = /\bis\b/g

let result1 = text.replace(reg1, 'IS')
console.log(result1)

let result2 = text.replace(reg2, 'IS')
console.log(result2)

let reg3 = /\Bis\b/g

let result3 = text.replace(reg3, 'IS')
console.log(result3)

let text2 = '@123@abc@'

let reg4 = /@/g

let result4 = text2.replace(reg4, 'Q')

console.log(result4)

let reg5 = /^@/g

let result5 = text2.replace(reg5, 'Q')

console.log(result5)

let reg6 = /@$/g

let result6 = text2.replace(reg6, 'Q')

console.log(result6)

let text3 = '@123\n@456\n@789'

let reg7 = /^@\d/g

let result7 = text3.replace(reg7, 'Q')

console.log(result7)

let reg8 = /^@\d/gm

let result8 = text3.replace(reg8, 'Q')

console.log(result8)