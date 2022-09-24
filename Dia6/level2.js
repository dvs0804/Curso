//1 level 2

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

console.log(makeid(Math.floor(Math.random() * 10)))
//2

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code())
//3
function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    console.log(RGBColor);
  }
  
  randomRGB();

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
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
countries1=
["ALBANIA",
 "BOLIVIA",
 "CANADA",
 "DENMARK",
 "ETHIOPIA",
 "FINLAND",
 "GERMANY",
 "HUNGARY",
 "IRELAND",
 "JAPAN",
 "KENYA"]

 //5
 let newArr=[]
 for(let i = 0; i < countries1.length; i++){

   newArr.push(countries1[i].length)
 }
 
 console.log(newArr) 
 //6
 let nuevoarreglo =[]
 for(let i = 0; i < countries1.length; i++){

    nuevoarreglo.push(countries1[i].slice(0,3))
  } 
  console.log(nuevoarreglo)
let arregloCombinado =[]
for(let i =0;i<countries1.length;i++){
    arregloCombinado[i]=[countries[i],nuevoarreglo[i],newArr[i]]
}
console.log(arregloCombinado)

//7
const countriesContainingLand = countries.filter((country) =>
 country.includes('land'))
console.log(countriesContainingLand)

//8
const countriesEndWithIa = countries.filter((country) =>
 country.endsWith('ia'))
console.log(countriesEndWithIa)
//9
let largo=''
for(let i =0;i<countries.length;i++){
    if(countries[i].length>largo.length)
    {
      largo = countries[i]
    }
  
}
console.log(largo)

//10
let char5=[]
for(let i =0;i<countries.length;i++){
    if(countries[i].length==5)
    {
      char5.push(countries[i]) 
    }
  
}
console.log(char5)
//11
let largoWeb=''
for(let i =0;i<webTechs.length;i++){
    if(webTechs[i].length>largoWeb.length)
    {
      largoWeb = webTechs[i]
    }
  
}
console.log(largoWeb)

//12
let largoString=0
let webTechsWithLegth=[]
for(let i=0;i<webTechs.length;i++){
  largoString=webTechs[i].length
  webTechsWithLegth[i]=[webTechs[i],largoString]
}
console.log(webTechsWithLegth)

//13An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack


//14
for(let i=0;i<webTechs.length;i++){
  console.log(webTechs[i])
}
//15
fruit=['banana', 'orange', 'mango', 'lemon'] 
for(let i=fruit.length;i>=0;i--){
  console.log(fruit[i])
}
//16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(let i=0;i<fullStack.length;i++){
  for(let x=0;x<fullStack[i].length;x++)
    console.log(fullStack[i][x])
}
/*
level 3
1.Copy countries array(Avoid mutation)
2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
3.Sort the webTechs array and mernStack array
4.Extract all the countries contain the word 'land' from the countries array and print it as array
5.Find the country containing the hightest number of characters in the countries array
6.Extract all the countries contain the word 'land' from the countries array and print it as array
7.Extract all the countries containing only four characters from the countries array and print it as array
8.Extract all the countries containing two or more words from the countries array and print it as array
9.Reverse the countries array and capitalize each country and stored it as an array
*/
