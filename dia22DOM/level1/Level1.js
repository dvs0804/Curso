let doc = document.getElementById('flex-container')
doc.style.display='flex'
doc.style.flexDirection='row'
doc.style.flexWrap='wrap'

function primo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }

let title
for(let i=0;i<=100;i++){
    title = document.createElement('div')
 
    //title.className = 'col-sm-2'
    title.style.fontSize = '50px'
    title.style.textAlign='center'
    title.style.width='150px'
    title.style.height='150px'
    title.style.border='2px solid white'
    title.style.padding='.5em'
    title.style.color='white'
    title.textContent=i
    if(i%2===0){
        title.style.backgroundColor='green'
    }else if(primo(i)){
        title.style.backgroundColor='red'
    }else{
        title.style.backgroundColor='yellow'
    }
 
    //title.style.backgroundColor = 'green'
    doc.insertAdjacentElement('beforeend',title)
    //document.doc.appendChild(title)
  }







