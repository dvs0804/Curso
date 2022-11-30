
    let cont= document.getElementById('container')
    let h2= document.querySelector('h2')
    h2.textContent=`Number of countries is: ${countries.length}`
    
    let countr
   function data(c,flag,title,capital,lan,popu){
        flag.src =`${c.flag}`
        title.textContent =`${c.name}` 
        capital.textContent =`Capital: ${c.capital} ` 
        lan.textContent =`Languages: ${c.languages}` 
        popu.textContent =`Population: ${c.population}`
        countr.insertAdjacentElement('beforeend',flag)
        countr.insertAdjacentElement('beforeend',title)
        countr.insertAdjacentElement('beforeend',capital)
        countr.insertAdjacentElement('beforeend',lan)
        countr.insertAdjacentElement('beforeend',popu)
        cont.insertAdjacentElement('beforeend',countr)
    }

    Object.entries(countries).forEach(([_,c])=> {
        countr = document.createElement('div')
        countr.classList='country'
        //countr.textContent = c.name
        flag = document.createElement('img')
        title = document.createElement('h1')
        capital = document.createElement('p')
        lan = document.createElement('p')
        popu = document.createElement('p')
        
       data(c,flag,title,capital,lan,popu)
       

    })
   

    let filterCountry = document.getElementById('search')
    let cantFilter = document.getElementById('cantidadFiltrado')
    let btnOrderName = document.getElementById('name')
    let btnOrderCapital = document.getElementById('capital')
    let btnOrderPopulation = document.getElementById('population')

    let divCountries = document.querySelectorAll('.country')


         
    let filtrado
    let ordenName = true
const searchAnyLetter = ()=>{
        filtrado=[]
        cantFilter.textContent=""
        Object.entries(countries).filter(([_,c],i)=>{
            let countryToLower = c.name.toLowerCase()
            if(countryToLower.indexOf(filterCountry.value)!=-1){
                divCountries[i].classList.remove('filtro')
                filtrado.push(c)
            }else
            {
                divCountries[i].classList.add('filtro')
                
            }        
    })
    if(filterCountry.value !=""){
        cantFilter.textContent = `it found ${filtrado.length} counntries`
    }   
return filtrado
}
filterCountry.addEventListener('keyup',searchAnyLetter)


const orderName = ()=>{
    if(filtrado==undefined){
        filtrado= countries
    }
 if(ordenName===true){
    filtrado.sort(function(a,b){
        if(a.name>b.name)return -1})

    Object.entries(filtrado).forEach(([_,c],i)=>{
      //  divCountries[i].innerHTML = '';  
        countr = document.createElement('div')
        countr.classList='country'
        //countr.textContent = c.name
        flag = document.createElement('img')
        title = document.createElement('h1')
        capital = document.createElement('p')
        lan = document.createElement('p')
        popu = document.createElement('p')
    
        divCountries[i] = data(c,flag,title,capital,lan,popu)
       //divCountries[i] = data(c,flag,title,capital,lan)
    })  
    ordenName = false
 }else{
    filtrado.sort(function(a,b){
        if(a.name<b.name)return -1})
    Object.entries(filtrado).forEach(([_,c],i)=>{
        data(filtrado)
       //divCountries[i] = data(c,flag,title,capital,lan)
    })  
    ordenName = true
 }
}
btnOrderName.addEventListener('click',orderName)
let ordenCap =  true
const orderCapital = ()=>{
    if(filtrado==undefined){
        filtrado= countries
    }
    if(ordenCap===true){
       const arrayCoutriesName=filtrado.sort(function(a,b){
           if(a.capital>b.capital)return -1})
       Object.entries(arrayCoutriesName).forEach(([_,c],i)=>{
           divCountries[i].textContent=`${c.flag}\n ${c.name} \n Capital: ${c.capital} \n Languages: ${c.languages}\n Population: ${c.population}`
       })  
       ordenCap = false
    }else{
       const arrayCoutriesName=filtrado.sort(function(a,b){
           if(a.capital<b.capital)return -1})
       Object.entries(arrayCoutriesName).forEach(([_,c],i)=>{
           divCountries[i].textContent=`${c.flag}\n ${c.name} \n Capital: ${c.capital} \n Languages: ${c.languages}\n Population: ${c.population}`
       })  
       ordenCap = true
    }
   }
   btnOrderCapital.addEventListener('click',orderCapital)

   let ordenPop = true
   const orderPopulation = ()=>{
    if(filtrado==undefined){
        filtrado= countries
    }
    if(ordenPop===true){
       const arrayCoutriesName=filtrado.sort(function(a,b){
           if(a.population>b.population)return -1})
       Object.entries(arrayCoutriesName).forEach(([_,c],i)=>{
           divCountries[i].textContent=`${c.flag}\n ${c.name} \n Capital: ${c.capital} \n Languages: ${c.languages}\n Population: ${c.population}`
       })  
       ordenPop = false
    }else{
       const arrayCoutriesName=filtrado.sort(function(a,b){
           if(a.population<b.population)return -1})
       Object.entries(arrayCoutriesName).forEach(([_,c],i)=>{
           divCountries[i].textContent=`${c.flag}\n ${c.name} \n Capital: ${c.capital} \n Languages: ${c.languages}\n Population: ${c.population}`
       })  
       ordenPop = true
    }
   }
   btnOrderPopulation.addEventListener('click',orderPopulation)
//____________________________________________________________________________
let btnPopulation=document.getElementById("populate")
let btnLanguages = document.getElementById("languages")
let btnShowGrafic = document.getElementById("grafico")

let pSubtitle= document.querySelector('.subtitle')
pSubtitle.textContent=`Currently,We have ${countries.length} countries` 
let canvass = document.getElementById('grafica')

let show = true
function showGrafic(){
if(show==true){
    btnPopulation.style.display='none'
    btnLanguages.style.display='none'
    canvass.style.display='none'
    show = false
}else
{
    btnPopulation.style.display='flex'
    btnLanguages.style.display='flex'
    canvass.style.display='block'
    show= true
}
}


function showPopulation(){
    var countriesName = []
    var populationNumber = []
    if(filtrado==undefined){
        filtrado= countries
    }
    let pMessage = document.querySelector('.feedback')
    pMessage.textContent='10 Most Populated Countries in the world'
    array=filtrado.sort((a,b)=>{
    if(a.population>b.population)return -1});

    if(filtrado.length>10){
        numb=10
    }else{
        numb = filtrado.length
    }
    for(let i=0;i<numb;i++){
        countriesName.push(array[i].name)
        populationNumber.push(array[i].population)
    }
     
    let dataChart = {
        labels:countriesName,
        datasets:[{
                label:'Grafica de Poblacion',
                backgroundColor:'rgb(255,150,55)',
                data:populationNumber
        }]
    }   
    let canvas = document.getElementById('grafica').getContext('2d')
    if(window.chart != undefined)
    window.chart.destroy(); 
    window.chart =new Chart(canvas,{
        type: 'bar',
        data: dataChart,
        options: {
            indexAxis:'y',
        scales: {
            y: {
            beginAtZero: true
            }
        }
        },
    })
}

function showLanguage(){

    let lang=[]
    let array=[]
    let arrayCount=[]
    let language=[]
    let num=[]
    if(filtrado==undefined){
        filtrado= countries
    }
    let pMessage = document.querySelector('.feedback')
    pMessage.textContent='10 Most Spoken Languages in the world'
    Object.entries(filtrado).forEach(([_,country])=>{
        for(let i=0;i<country.languages.length;i++){
            lang.push([country.languages[i]])
        }
     } )
    arrayCount= lang.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1, a), {})
    array=Object.entries(arrayCount)
    array.sort(function(a, b) {
        return b[1] - a[1];
    });
    if(filtrado.length>10){
        numb=10
    }else{
        numb = filtrado.length
    }

    for(let i=0;i<numb;i++){
        language.push(array[i][0])
        num.push(array[i][1])
    }

    let dataChart = {
        labels:language,
        datasets:[{
                label:'Grafica de Idiomas',
                backgroundColor:'rgb(255,150,55)',
                data:num
        }]
    }   
    let canvas = document.getElementById('grafica').getContext('2d')
    if(window.chart != undefined)
    window.chart.destroy(); 
    window.chart =new Chart(canvas,{
        type: 'bar',
        data: dataChart,
        options: {
            indexAxis:'y',
        scales: {
            y: {
            beginAtZero: true
            }
        }
        },
    })
}
btnPopulation.addEventListener("click",showPopulation)
btnLanguages.addEventListener('click',showLanguage)
btnShowGrafic.addEventListener("click",showGrafic)

