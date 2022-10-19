let cont= document.getElementById('container')
cont.style.display='flex'
cont.style.flexDirection='row'
cont.style.flexWrap='wrap'
cont.style.justifyContent='center'
cont.style.columnGap='50px'
cont.style.rowGap='50px'

/*  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px; */

let h1=document.querySelector('h1')
h1.style.textAlign='center'

let h2=document.querySelector('h2')
h2.style.textAlign='center'

let h5=document.querySelectorAll('h5')
for(let i=0;i<h5.length;i++)
{
    h5[i].style.textAlign='center'
}


let arrayCountry=[]
Object.entries(countries_data).forEach(([_,country],i)=>{
    let co= country.name
    arrayCountry.push(co)
})
console.log(arrayCountry)
/*let row =document.createElement('div')
row.className='row'
cont.insertAdjacentElement('beforebegin',row)
*/
let countr
for(let i=0;i<=countries_data.length;i++){
    countr = document.createElement('div')
    countr.style.fontSize = '18px'
    countr.style.textAlign='center'
    countr.style.verticalAlign='middle'
    countr.style.width='150px'
    countr.style.height='150px'
    countr.style.border='1px solid black'
   // countr.style.padding='.5em'
    countr.textContent=arrayCountry[i]
    

    cont.insertAdjacentElement('beforeend',countr)
}

