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
//1
const emptyArray=[]
//2
const numbers = [1,2,3,4,5,6,]
//3
let numbersLegth= numbers.length
console.log(numbers.length)
//4
let middle = numbersLegth/2 
const firstItem = numbers[0]
const middleItem=  numbers[middle]
const lastItem = numbers[numbersLegth-1]
//5
const mixedDataTypes = [
    'computadora',
    5,
    false,
    'laptop',
    true,
    8,
    9
]
//6
const itCompanies =[
    'Facebook', 
    'Google', 
    'Microsoft', 
    'Apple', 
    'IBM', 
    'Oracle',
    'Amazon'
]
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length-1])
//10
itCompanies.forEach(element => {
    console.log(element)
});
//11
const itCompaniesUpperCase = itCompanies.map((companies)=>companies.toUpperCase())
console.log(itCompaniesUpperCase)
//12
console.log(itCompanies.toString())
//13
let company = prompt('Digite una compañia','write here')
if(itCompanies.includes(company)==true)
{
  console.log(`${company}`+ ' si existe dentro del arreglo')
}else
{
  console.log('la compañia digitada no se encuetra dentro del arreglo')
}
//14 Filter out companies which have more than one 'o' without the filter method

//15
console.log(itCompanies.sort())

//16
console.log(itCompanies.reverse())
//17Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

//18Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,3))
//19Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3))
//20Remove the first IT company from the array
console.log(itCompanies.splice(0,1))
//21Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3,1))
//22Remove the last IT company from the array
console.log(itCompanies.splice(itCompanies.length-1,1))
//23Remove all IT companies
console.log(itCompanies.splice())

