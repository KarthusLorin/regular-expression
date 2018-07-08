let text = 'ByronsperByrCasper'

let reg = /Byr(on|Ca)sper/g		// 匹配Byronsper或ByrCasper

let result = text.replace(reg, 'X')		// XX

console.log(result)

let text2 = '2018-07-09'

let reg2 = /(\d{4})-(\d{2})-(\d{2})/g

let result2 = text2.replace(reg2, '$2/$3/$1')

console.log(result2)