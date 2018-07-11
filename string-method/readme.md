### 字符串对象方法

#### search方法

String.prototype.search(reg)<br/>

search方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，方法返回第一个匹配结果的index，查找不到则返回`-1`。

```js
'a1b2c3d1'.search('1')		// 1

'a1b2c3d1'.search('10')		// -1

'a1b2c3d1'.search(/1/)		// 1

'a1b2c3d1'.search(/1/g)		// 1

'a1b2c3d1'.search(/1/g)		// 1

'a1b2c3d1'.search(1)		// 1
```

**tips：**<br/>

**1.search方法不执行全局匹配，它将忽略标志g，并且总是从字符串的开始进行检索，因此，它不会产生类似于test方法的问题**<br/>

**2.不输入正则表达式则search方法将会自动将其转为正则表达式**



#### match方法

String.prototype.match(reg)<br/>

match方法将检索字符串，以找到一个或多个与reg匹配的文本，reg是否具有标志`g`对结果影响很大。

##### 非全局调用

如果reg没有标识`g`，那么match方法就只能在字符串中执行一次匹配，如果没有找到任何匹配的文本，将返回`null`，否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。<br/>

返回数组的第一个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。<br/>

除了常规的数组元素之外，返回的数组还含有2个对象属性：<br/>

- index：声明匹配文本的起始字符在字符串的位置<br/>
- input：声明对stringObject的引用<br/>

```js
let reg = /\d(\w)\d/

let text = '$1a2b3c4e5e'

// 子表达式是 /\w/，匹配a
let result = text.match(reg)	  // ["1a2", "a"]

result.index					// 1

// 不管lastIndex
result.lastIndex				// 0

result.input					// '$1a2b3c4e5e'
```

##### 全局调用

如果regexp具有标志`g`则match方法将执行全局检索，找到字符串中的所有匹配子字符串。如果没有找到任何匹配的子串，否则，返回一个数组。<br/>

数组元素中存放的是字符串中所有的匹配子串，而且也没有index属性或input属性。

```js
let reg = /\d(\w)\d/g

let text = '$1a2b3c4e5e'

let result = text.match(reg)		// ["1a2", "3c4"]

result.index					   // undefined

result.input					   // undefined

result.lastIndex				   // 0
```



#### split方法

String.prototype.split(reg)<br/>

我们经常使用split方法将字符串分割为字符数组：

```js
'a, b, c, d'.split(',')			// ["a", "b", "c", "d"]
```

在一些复杂的分割情况下我们可以使用正则表达式解决：

```js
'a, b, c, d'.split(/,/)			// ["a", "b", "c", "d"]

'a1b2c3d'.split(/\d/)			// ["a", "b", "c", "d"]
```



#### replace方法

replace方法有三种形态：<br/>

1.String.prototype.replace(str, replaceStr)<br/>

2.String.prototype.replace(reg, replaceStr)

```js
'a1b1c1'.replace('1', 2)		// 'a2b1c1'

'a1b1c1'.replace(/1/g, 2)		// 'a2b2c2'
```

3.String.prototype.replace(reg, function)<br/>

function会在每次匹配替换的时候调用，有四个参数<br/>

1.匹配字符串<br/>

2.正则表达式分组内容，没有分组则没有该参数<br/>

3.匹配项在字符串中的index<br/>

4.原字符串

```js
'a1b2c3d4e5'.replace(/\d/g, (match, index, origin) => {
    console.log(index)
    return parseInt(match) + 1
})

// 1 3 5 7 9
// 'a2b3c4d5e6'


'a1b2c3d4e5'.replace(/(\d)(\w)(\d)/g, (match, group1, group2, group3, index, origin) => {
    console.log(match)
    return group1 + group3
})

// '1b2' '3d4'
// ''a12c34e5		=> 去除了第二个分组\w匹配到的b和d
```

