//1
function fulllName(){
    let firstName = 'Denis'
    let lastName = 'Vasquez'
    console.log(firstName+' '+lastName)
}
fulllName()
//2
function fulllName(first,last){
    let firstName = first
    let lastName = last
    let fullName=firstName+' '+lastName
    return(fullName)

}
fulllName('Denis','Vasquez')
//3
function AddNumbers(number1,number2){
    let sum=number1+number2
    return(sum)

}
AddNumbers(5,11)
//4

function AreaRectangule(leght,width){
    let area=leght*width
    return(area)

}
AreaRectangule(5,11)
//5
function PerimeterRectangule(leght,width){
    let perimeter=2(leght+width)
    return(perimeter)

}
PerimeterRectangule(11,5)

//6
function VolumeOfRectPrism(leght,width,height){
    let volume=leght*width*height
    return(volume)

}
VolumeOfRectPrism(11,5,5)
//7
function areaCircule(r){
    let arCir=r*r*Math.PI
    return(arCir)

}
areaCircule(11)

//8
function circumOfCircle(r){
    let circumCir=2*r*Math.PI
    return(circumCir)

}
circumOfCircle(11)

//9
function densityGeneral(mass,volume){
    if(volume!=0){
        let density= mass/volume
        return(density)
    }else{
        console.log('el volume no puede ser igual a 0')
    }
}
densityGeneral(11,11)
//10
function SpeedObject(distance,time){
    if(time!=0){
        let speed= distance/time
        return(speed)
    }else{
        console.log('el tiempo no puede ser igual a 0')
    }
}
SpeedObject(100,10)

//11
function weightObject(mass){
    let gravity= 9.8
    weight = mass*gravity
    return(weight)
}
weightObject(11)
//12
function convertCelsiusToFahrenheit(tempeCelsius){
    let fahreheit= (tempeCelsius*9/5)+32
    return(fahreheit)
}
convertCelsiusToFahrenheit(11)
//13
function BMI(weightKg,height){
    ibm = weightKg/height**2
    if(ibm<18.5 ){
        console.log('estas por debajo de tu peso y tu indice es: '+ weightKg)
    }else if(ibm>=18.5 && ibm<=24.9){
        console.log('peso normal y tu indice es: '+ weightKg)
    }else if(ibm>=25 && ibm<=29.9){
        console.log('tienes sosbrepeso y tu indice es: '+ weightKg)
    }
    else {
        console.log('tienes obecidad y tu indice es: '+ weightKg)
    }
}
BMI(50,1.50)
//14
function checkSeason(){
    let estacion = prompt('Digite el mes a consultar','mes aqui')
if(estacion == 'setiembre' || estacion =='octubre'|| estacion=='noviembre')
{
    console.log('la estacion es Otoño ya que digitaste: ' + estacion)
}else if(estacion == 'diciembre' || estacion =='enero'|| estacion=='febrero')
{
    console.log('la estacion es Invierno ya que digitaste: ' + estacion)
}else if(estacion == 'marzo' || estacion =='abril'|| estacion=='mayo')
{
    console.log('la estacion es Primavera ya que digitaste: ' + estacion)
}else
{
    console.log('la estacion es verano ya que digitaste: ' + estacion)
}
}
//15
function findMax(num1,num2,num3){
    let resultado=0
    if(num1>num2 && num1>num3){
        resultado= num1
    }else if(num2>num1 && num2>num3){
        resultado= num2
    }else if(num3>num1 && num3>num2){
        resultado= num3
    }
    console.log(resultado)
}

findMax(1,2,3)
