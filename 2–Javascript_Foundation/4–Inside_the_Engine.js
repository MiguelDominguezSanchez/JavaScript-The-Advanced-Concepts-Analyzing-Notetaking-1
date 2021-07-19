// Javascript Engine
function jsengine(code) {
	return code.split(/\s+/)
}

jsengine('var a = 5')

console.log(jsengine('var a = 5'))

/*
Array(4) [ "var", "a", "=", "5" ]
​
0: "var"
​
1: "a"
​
2: "="
​
3: "5"
​
length: 4
*/

/*
(back to html script)
*/
