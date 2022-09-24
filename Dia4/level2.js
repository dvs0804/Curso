//1
let puntaje = prompt('Digite el puntaje obtenido','puntaje')
let  puntajeNum = parseInt(puntaje)
if(puntajeNum>=80 && puntajeNum<=100)
{
    console.log('La calificacion obtenida es: A')
}else if(puntajeNum>=70 && puntajeNum<=79)
{
    console.log('La calificacion obtenida es: B')
}else if(puntajeNum>=60 && puntajeNum<=69)
{
    console.log('La calificacion obtenida es: C')
}else if(puntajeNum>=50 && puntajeNum<=59)
{
    console.log('La calificacion obtenida es: D')
}else 
{
    console.log('La calificacion obtenida es: F')
}
//2
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

//3
let typeDay = prompt('What is the day today','write here')
if(typeDay=='saturday'||typeDay=='sunday')
{
    console.log(typeDay+ ' is a weekend')
}else{
    console.log(typeDay+ ' is a working day')   
}


