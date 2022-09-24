// 1
let edad = prompt('Digite su edad','edad aqui')
let FaltaEdad = 18-edad
if (edad >=18)
{
    console.log("Puedes coducir, tienes edad")

}
else{
    console.log("No puedes conducir, te hacen falta: " + edad+ " años")
}

//2
let myAge= prompt('Digite mi edad','mi edad aqui')
let yourAge = prompt('Digite su edad','su edad aqui')
if(parseInt(myAge)<parseInt(yourAge)){
    difAge= yourAge-myAge
    console.log('You are' +`${difAge}`+'years older than me')
}else if(parseInt(myAge)>parseInt(yourAge)){
    difAge=myAge-yourAge
    console.log('I am' +`${difAge}`+'years older than you')
}else{
    console.log('we have the same age')
}
//3
let a = 4
let b = 3
Resultado=a>b
if(a>b){
    console.log("a is greather than b")
}else{
    console.log("a is less than b")
}
Resultado
    ?console.log("a is greather than b")
    :console.log("a is less than b")
//4
let NumeroPar= prompt('Digite un numero','numero aqui')
if(parseInt(NumeroPar)%2==0){
    console.log(NumeroPar + ' es numero es par')
}else{
    console.log(NumeroPar+ " es numero es impar")
}
