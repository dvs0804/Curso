let firstName = 'denis'//1
let lastName = 'Vasquez'
let country = 'Costa Rica'
let city = 'Palmares'
let age = 31
let isMarried = false
let year = Date()
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2
const check = '10'=== 10
console.log(check)
//3
const check1 = parseInt('9.8') === 10
console.log(check1)
//4
/*i
true, numeros positivos y negativos excepto 0, cadena de string excepto espacio vacio
*/
/*0, "", false */

//5
const check5i = 4>3
const check5ii = 4>=3
const check5iii = 4<3
const check5iv = 4<=3
const check5v = 4==4
const check5vi = 4===4
const check5vii = 4!=4
const check5viii = 4!==4
const check5ix = 4!='4'
const check5x = 4=='4'
const check5xi = 4==='4'
const python = 'python'
const jargon = 'jargon'
const check5xii = !(python.length==jargon.length)
console.log(check5i)
console.log(check5ii)
console.log(check5iii)
console.log(check5iv)
console.log(check5v)
console.log(check5vi)
console.log(check5vii)
console.log(check5viii)
console.log(check5ix)
console.log(check5x)
console.log(check5xi)
console.log(check5xii)
//6
const check6i = 4>3&& 10<12
const check6ii = 4>3&& 10>12
const check6iii = 4>3||10<12
const check6iv = 4>3 || 10>12
const check6v = !(4>3)
const check6vi = !(4<3)
const check6vii = !(false)
const check6viii = !(4>3&&10<12)
const check6ix = !(4>3&&10>12)
const check6x = !(4==='4')
const check6xi = 4==='4'

console.log(check6i)
console.log(check6ii)
console.log(check6iii)
console.log(check6iv)
console.log(check6v)
console.log(check6vi)
console.log(check6vii)
console.log(check6viii)
console.log(check6ix)
console.log(check6x)
console.log(check6xi)
//7
const now = new Date()
const year1 = now.getFullYear()
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
const allSeconds = Date.now() 
console.log(allSeconds) 




