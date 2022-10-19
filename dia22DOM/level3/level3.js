const title = document.querySelector('h1')

const titleH2 = document.querySelector('h2')

let datet = document.createElement('h3')
datet.id='background'

function startTime(){
  today=new Date();
 y = today.getFullYear() // return year
 mon = today.getMonth() + 1 // return month(0 - 11)
 d = today.getDate() // return date (1 - 31)
  h=today.getHours();
  m=today.getMinutes();
  s=today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  datet.innerHTML=y+'/'+mon+'/'+d+ ' '+h+":"+m+":"+s;
  t=setTimeout('startTime()',500);}
  function checkTime(i)
  {if (i<10) {i="0" + i;}return i;}
  window.onload=function(){startTime();}

titleH2.insertAdjacentElement('afterend',datet)
var i = 0;
function change() {
  var bg = document.querySelector("#background");
  var color = ["orange", "blue", "brown", "green","red",'yellow','purple','coffee'];
  bg.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);

/*let ulStyle= document.querySelector('ul')
ulStyle.className='text-center'


let liStyle = document.querySelectorAll('li')
  liStyle[0].id='Done'
  liStyle[1].id='Ongoing'
  for(let i=2;i<liStyle.length;i++){
    liStyle[i].id='Coming'
}*/


let table = document.createElement('table')
let tbody= document.createElement('tbody')
table.appendChild(tbody)

document.getElementById('wrapper').appendChild(table)

buttonDrop = document.createElement('button')
buttonDrop.addEventListener('onclick',function Drop(){
  document.getElementById("myDropdown").selectIndex ='0'
})

  Object.entries(asabenehChallenges2020.challenges).forEach(([_,info])=>{
    button = document.createElement('button')
    button.type='button'
    button.classList ='collapsible'
    button.textContent=info.topics [0]
    divContent = document.createElement('div')
    divContent.classList='content'
    for(var i = 0; i < info.topics.length; i++)  {
      var opt = info.topics[i]
      var option = document.createElement("p")
      option.textContent = opt
      option.value = opt 
      divContent.insertAdjacentElement('beforeend',option)  
      
  }
    button.textContent=divContent
     row = document.createElement('tr')
     row.id=info.status
     rowName = document.createElement('td')
     rowName.innerHTML=info.name 
     rowDropDown = document.createElement('td')
     rowDropDown.innerHTML = button
     rowStatus = document.createElement('td')
     rowStatus.innerHTML = info.status   
     row.appendChild(rowName)
     row.appendChild(button)
     row.appendChild(rowStatus)
     tbody.appendChild(row)


})
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*Object.entries(asabenehChallenges2020.challenges).forEach(([_,info])=>{
  select =document.createElement('select')
  select.id=info.status
  for(var i = 0; i < info.topics.length; i++)  {
    var opt = info.topics[i]
    var option = document.createElement("option")
    option.textContent = opt
    option.value = opt 
    select.insertAdjacentElement('beforeend',option)  
}

   row = document.createElement('tr')
   row.id=info.status
   rowName = document.createElement('td')
   rowName.innerHTML=info.name 
   rowDropDown = document.createElement('td')
   rowDropDown.innerHTML = buttonDrop
   rowStatus = document.createElement('td')
   rowStatus.innerHTML = info.status   
   row.appendChild(rowName)
   row.appendChild(select)
   row.appendChild(rowStatus)
   tbody.appendChild(row)


//}
})*/





