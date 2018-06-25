var reg1 =/\bis\b/;
var text = 'He is a boy. It is a dog'

var result1 = text.replace(reg1, 'IS')

console.log(result1)

var reg2 = new RegExp('\\bis\\b', 'g')
var result2 = text.replace(reg2, 'IS')

console.log(result2)

var reg3 = /\bis\b/gi;
var text2 = 'He is a boy. It Is a dog'
var result3 = text2.replace(reg3, 0)
console.log(result3)