### 对象属性

常用对象属性主要有以下几种：<br/>

1.global： 是否全文搜索，默认false<br/>

2.ignore case：是否大小写敏感，默认是false<br/>

3.multiline：多行搜索，默认值是false<br/>

4.lastIndex：是当前表达式匹配内容的最后一个字符<br/>

5.source：正则表达式的文本字符串<br/>

你可以在reg对象中直接访问该属性：

```js
let reg1 = /\w/

let reg2 = /\w/gim	// 设置reg属性

reg1.global			// false
reg1.ignoreCase		// false
reg1.multiline		// false
reg1.source			// "\w"

reg2.global			// true
reg2.ignoreCase		// true
reg2.multiline		// true
reg2.source			// "\w"
```

值得一提的是，是这些属性是只读的，你无法直接修改它们的值：

```js
reg1.global			// false

reg1.global = true

reg1.global			// false
```

