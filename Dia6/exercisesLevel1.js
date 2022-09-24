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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

 //1 
 for(let i=0;i>=10;i++){
        console.log(i)
 } 
 i=0
 while(i>=10){
    console.log(i)
    i++
 }
 i=0
 do{
    console.log(i)
    i++
 }while(i>=10)

//2
for(let i=10;i=0;i--){
    console.log(i)
} 
i=10
while(i=0){
console.log(i)
i--
}
i=10
do{
console.log(i)
i++
}while(i=0)

//3
for(let i=0;i>=n;i++){
    console.log(i)
} 

//4
let resultado=''
let signo = '#'
for(let i=0;i<=7;i++){
     resultado = resultado + signo 
     console.log(resultado)
}
//5
for(let i=0;i<=10;i++){
    resultado= i*i 
    console.log(i+'x'+i+'='+resultado)
}
//6
for(let i=0;i<=10;i++){
    resultado= i*i 
    console.log(i+'  '+i**2+'  '+i**3)
}

//7
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}
//8
for(let i=0;i<=100;i++){
    if(i%2!=0){
        console.log(i)
    }
}
//9
function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
    
}
for (let x=0;x<=100;x++) {
    if (esPrimo(x))
        console.log("El número " + x + " es primo");
}
//10
let resultados=0
for(let i=0;i<=100;i++){
   resultados+=i
}
console.log("la suma de los numeros del 0 al 100 es: "+resultados)
//11
let sumpares=0
let sumaimpares=0
for(let x=0;x<=100;x++)
{
    if (x%2===0)
    {
        sumpares+=x
    }else
    {
        sumaimpares+=x
    }
}
console.log('la sumatoria de los pares es: ' + sumpares)
console.log('la sumatoria de los pares es: ' + sumaimpares)

//12

let sumpares1=0
let sumaimpares1=0
for(let x=0;x<=100;x++)
{
    if (x%2===0)
    {
        sumpares1+=x
    }else
    {
        sumaimpares1+=x
    }
}
let array=[sumpares1,sumaimpares1]
console.log(array)
//13
let arrayRandom= []
for(let v=0;v<=4;v++)
{
    arrayRandom[v]= Math.floor(Math.random()*10)
}
console.log(arrayRandom)
//14 error logico
let arrayRandom1= []
let res=0
for(let v=0;v<=4;v++)
{
    res= Math.floor(Math.random()*10)
    if(arrayRandom1.includes(res)==true)
    {
        v--
    } else
    {
        arrayRandom1[v]=res
    }
}
console.log(arrayRandom1)
//15
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));


