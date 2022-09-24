//1
let base = prompt('Enter base', 'base goes here')
let altura = prompt('Enter heigth', 'height goes here')
let area = 0.5*base*altura
console.log(area)
//2
let a1 = prompt('Enter side a', 'side a goes here')
let b1 = prompt('Enter side b', 'side b goes here')
let c1 = prompt('Enter side c', 'side c goes here')
let perimetro = a1+b1+c1
console.log(perimetro)
//3
let largo = prompt('Enter largo', 'largo goes here')
let ancho = prompt('Enter ancho', 'ancho goes here')
let perimetroRectangulo = 2(largo+ancho)
console.log(perimetroRectangulo)
//4
let r = prompt('Enter radio', 'radio goes here')
let pi = 3.14
let areaCirculo = pi*r*r
let perimetroCirculo = 2*pi*r
console.log('el area del circulo es: `${areaCirculo}`, el perimetro del circulo es: `${perimetroCirculo}`')
//5
let x = 0
let y = 0
let m=2
let interseccionX= (y+2)/2
let interseccionY = 2*x -2
console.log("la interseccio con el eje X es: `${interseccionX}`y la interseccio con el eje Y es: `${interseccionY}`")
//6
let x1=2, x2 = 6, y1=2, y2=10
let pendiente= (y2-y1)/(x2-1)
console.log("la pendiente es: " + pendiente)
//7
let pendientes= m==pendiente
console.log("El resultado de la comparacion de las pendientes es: " + pendientes)
//8
let cortesX1= (-b + Math.sqrt(b**2 - 4*a*c))/2*a
let cortesX2= (-b - Math.sqrt(b**2 - 4*a*c))/2*a
let a = 1
let b= 6
let c = 9
console.log("los valores de x donde y es igual a 0 son: `${cortesX1}` y `${cortesX2}`")
//9
let HorasLaboradas = prompt('Digite horas trabajadas', 'Horas goes here')
let PrecioHora = prompt('Digite el precio de la hora', 'Precio goes here')
let salario = HorasLaboradas * PrecioHora
console.log("el salario es: " +salario)
//10
let NameLength = prompt('Digite su nombre','aqui su nombre')
if(NameLength.length > 7)
{
    console.log("Su nombre es largo")

}else{
    console.log("Su nombre es corto")

}
//11
let firstName ="Denis"
let lastName = "Vasquez"
if(firstName.length > lastName.length )
{
    console.log("your firstName, `${firstName}` is longer than your family name, `${lastName}`")


}else{
    console.log("your firstName, `${firstName}` is shorter than your family name, `${lastName}`")
    
}
//12
let myAge=31
let yourAge = 5
let difAge= myAge-yourAge
console.log("I am "+difAge +" older than you")
//13
let anioNacimiento = prompt('Digite su año de Nacimiento','año aqui')
const now1 = new Date()
const AnioActual = now1.getFullYear()
let edad = AnioActual- parseInt(anioNacimiento)
if (edad >=18)
{
    console.log("Puedes coducir, tienes edad")

}
else{
    console.log("No puedes conducir, debes tener 18 o mas años y tienes: " + edad)

}
//14
let aniosVida = prompt('Digite sus años de vida','años aqui')
let segundosVida = parseInt(aniosVida) * 31536000
console.log("Los segundos de vida segun los años digitados son: "+segundosVida)

//15
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
//i
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
//ii
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
//iii
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
