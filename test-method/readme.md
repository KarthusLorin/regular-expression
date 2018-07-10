### test方法

#### test方法介绍

```js
RegExp.prototype.test(str)
```

test方法用于测试字符串参数中是否存在匹配正则表达式模式的字符串

#### test方法的使用

```js
let reg = /\w/

reg.test('a')		// true

reg.test('$')		// false
```

通过结果可以看出，如果测试字符串参数存在匹配正则表达式模式的字符串则返回true，否则返回false

#### test方法的那些坑

当正则表达式使用了全局匹配时，test方法会出现如下的这种奇怪现象：

```js
let reg = /\w/g

reg.test('ab')		// true

reg.test('ab')		// true

reg.test('ab')		// false

reg.test('ab')		// true
```

可以看到，每轮的第三次匹配返回会变为true，但是，`ab`不是都符合reg吗，返回都应该返回true才对。原因就在于上一节提到过的lastIndex属性。<br/>

我们可以试试每次都运行test方法都打出reg的lastIndex方法：

```js
let reg = /\w/g
reg.lastIndex		// 0

reg.test('ab')		// true
reg.lastIndex		// 1

reg.test('ab')		// true
reg.lastIndex		// 2

reg.test('ab')		// false
reg.lastIndex		// 0

reg.test('ab')		// true
reg.lastIndex		// 1
```

看看结果，然后回忆下lastIndex的定义，你就明白原因了。<br/>

lastIndex属性是当前表达式匹配内容的最后一个字符的后一位，用于规定下一次匹配的起始位置。<br/>

当进入正则表达式全局模式时，每次使用test方法都会从lastIndex开始，匹配从lastIndex开始的子字符串。比如例子中，第二次执行test方法时，此时，lastIndex已经变为2，子字符串为空，所以reg不可能匹配上它。由于子字符串匹配失败，test方法返回false，并将lastIndex属性置为0，重新开始一轮循环。

#### 避免test中的坑的方法

第一种方法：test方法本身就是用来测试是否存在匹配正则的字符串，不使用全局模式一样可以实现目的，所以第一种方法就是不适用全局模式。<br/>

第二种方法：不将正则对象实例存在变量中，每次直接用正则对象实例调用test方法，不过这种方法对内存有所损耗，理论上不建议。