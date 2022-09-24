//1  Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function SolveinEquation(a,b,c,x){
    let y = 0
    y=  (c-(a*x))/b
    console.log(y)
}
SolveinEquation(1,2,8,4)



//2
function solveQuadratic(a,b,c){
let x1=0,x2=0
x1=(-b + Math.sqrt(b**2-4*a*c))/2
x2=(-b - Math.sqrt(b**2-4*a*c))/2
console.log('el valor de x1 y x2 respectivamente es: '+x1+' '+x2)
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
/*(-b ± √b2-4ac)/2 */

//3

function printArray(array){
array.forEach(element => {
    console.log(element)
})
}
printArray([1,2,3,4,5])
//4
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

timeString = month.toString().padStart(2,'0')+'/'+date.toString().padStart(2,'0')+'  ' +hours.toString().padStart(2, '0')
                + ':' + minutes.toString().padStart(2, '0')

console.log(`${year}/${timeString}`)

//5
function swapvalues(x,y){
    let a=0
    a=x
    x=y
    y=a
    console.log('X= '+x+' Y= '+y)
}
swapvalues(4,5)

//6   *****revisar error logico
function reverseArray(array){
    let indice= array.legth-1
    let reArray=[]
    for(let i=indice;i>=0;i--){
       reArray.push(array [i])
    }
    console.log(reArray)
    
}
reverseArray([1,2,3,4,5])

//7
function capitalizeArray(array){
   const arrayToUppercase = array.map((element)=>element.toUpperCase()) 
    console.log(arrayToUppercase)
}
capitalizeArray(['denis','vasquez','sanchez'])

//8
function addItem(array){
   array.push('salitosamu')
   return(array)
 }
 addItem(['denis','vasquez','sanchez'])
 
 //9
 function removeItem(index){
    let arraymodi= []
    let array=['denis','vasquez','sanchez']
    arraymodi= array.slice(index)
    console.log(arraymodi)
  }
  removeItem(2)
//10
function sumOfNumbers(num1,num2){
    let result=0
    if(num1>num2)
    {
        for(let i=num2;i<=num1;i++){
            result+=i
        }
    }else if(num2>num1){
        for(let i=num1;i<=num2;i++){
            result+=i
        }
    }
    console.log(result)
}
sumOfNumbers(2,5)

//11
function sumOfOdds(num1,num2){
    let result=0
    if(num1>num2)
    {
        for(let i=num2;i<=num1;i++){
            if(i%2!=0){
                result+=i
            }
        }
    }else if(num2>num1){
        for(let i=num1;i<=num2;i++){
            if(i%2!=0){
                result+=i
            }
        }
    }
    console.log(result)
}
sumOfOdds(2,7)

//12
function sumOfEvens(num1,num2){
    let result=0
    if(num1>num2)
    {
        for(let i=num2;i<=num1;i++){
            if(i%2==0){
                result+=i
            }
        }
    }else if(num2>num1){
        for(let i=num1;i<=num2;i++){
            if(i%2==0){
                result+=i
            }
        }
    }
    console.log(result)
}
sumOfEvens(2,7)
//13
function evenAndOdds(num){
    let cantPar = 0
    let cantImpar = 0
    for(let i=0;i<=num;i++){
            if(i%2==0){
                cantPar+=1
            }else{
                cantImpar+=1
            }
        }
    console.log('NNumeros pares: ' + cantPar)
    console.log('NNumeros pares: ' + cantImpar)
}
evenAndOdds(20)

//14
function sumArgument(num1,num2,num3){
    let result=0
    result=num1+num2+num3
    console.log(result)
}
sumArgument(2,5,6)

//15
/*Writ a function which generates a randomUserIp*/


//16
function macAdress() {
    
    var characters  = 'ABCDEF0123456789'
    let macAdress   =''  
    for ( var i = 0; i < 6; i++ ) {
        var result      = ''
        for(let x=0;x<2;x++){
            result += characters.charAt(Math.floor(Math.random() * 
            10))
        }
        macAdress+=result+':'
      
   }
   return macAdress
}
macAdress()

//17
function randomHexaNumberGenerator(){
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
}
console.log(randomHexaNumberGenerator())
//18
function userIdGenerator(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(userIdGenerator(Math.floor(Math.random() * 10)))
