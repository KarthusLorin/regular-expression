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

/*
  只读
 */
reg1.global			// false
reg1.global = true
reg1.global			// false