### 量词

很多时候，我们需要匹配一个连续出现很多次字符的字符串，比如，我们要匹配一个连续出现20次的数字的字符串，按照之前的写法：

```js
\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d
```

是不是感觉快疯了？很庆幸，使用正则提供的量词，我们就可以快速解决这个问题。<br/>

量词的使用方法如下：

| 字符  | 含义                           |
| ----- | ------------------------------ |
| ?     | 出现零次或一次（最多出现一次） |
| +     | 出现一次或多次（至少出现一次） |
| *     | 出现零次或多次（任意次）       |
| {n}   | 出现n次                        |
| {n,m} | 出现n到m次                     |
| {n,}  | 至少出现n次                    |

那么该如何使用量词实现之前的问题？<br/>

很简单，只需要：

```js
\d{20}
```

如果想要匹配最多出现n次该怎么办？很多人会想模仿至少出现n次，写成`{,n}`，但是正则会直接将其当做普通字符串，只有写成`{0, n}`才能实现匹配至多n次。