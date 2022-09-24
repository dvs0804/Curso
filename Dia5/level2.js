//2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let arrayText= text.split(' ')
console.log(arrayText)
console.log(arrayText.length)

//3
shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat')
shoppingCart.push('sugar')
shoppingCart.splice(4,1)
shoppingCart[3]='Green Tea'
//4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
palabra='Ethiopia'
if(countries.includes(palabra)==true){
    console.log('ETHIOPIA')
}else {
    countries.push(palabra)
}

//5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
palabra1='Sass'
if(countries.includes(palabra1)==true){
    console.log('Sass is a CSS Preprocess')
}else {
    countries.push(palabra1)
}
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)




