### REGEXP对象

JavaScript通过内置对象RegExp支持正则表达式，有两种方法实例化RegExp对象。<br/>

1.字面量<br/>

2.构造函数<br/>



#### 字面量

字面量是直接通过`/.../`创建RegExp对象实例。

```js
var reg = /\bis\b/
var text = 'He is a boy.'

var result = text.replace(reg, 'IS')	// 'He IS a boy.'
```



#### 构造函数

构造函数版本看起来比较像Java中创建实例的样子，但是正如不推荐使用`new Array`而是使用`[]`创建数组一样，推荐使用字面量创建RegExp对象实例。

```js
var reg = new RegExp('\\bis\\b', 'g')
var text = 'He is a boy. It is a dog'

var result = text.replace(reg, 'IS')	// 'He IS a boy. It IS a dog'
```



#### 修饰符

在正常情况下，正则匹配到第一个匹配项则停止，并且默认大小写敏感，如果想修改默认选项，则需要修饰符。值得一提，修饰符可以同时使用，比如我想要全局大小写不敏感，则同时在正则末尾加上`gi`<br/>

`g`：global 全文搜索，<br/>

`i`：ignore case 忽略大小写<br/>

`m`：multiple lines 多行搜索<br/>

```js
var reg = /\bis\b/gi
var text = 'He is a boy. It Is a dog'

var result = text.replace(reg, 0)	// 'He 0 a boy. It 0 a dog'
```

