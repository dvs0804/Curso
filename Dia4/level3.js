let daysOfMonth= prompt('digite el mes que desea consultar', 'write here')
switch(daysOfMonth){
    case 'enero':
        console.log(daysOfMonth+'tiene 31 dias')       
      break
    case 'febrero':
        console.log(daysOfMonth+'tiene 28 dias dependiendo del año') 
        break
    case 'marzo':
        console.log(daysOfMonth+'tiene 31 dias') 
     break
    case 'abril':
        console.log(daysOfMonth+'tiene 30 dias') 
        break
    case 'mayo':
        console.log(daysOfMonth+'tiene 31 dias') 
        break
    case 'junio':
        console.log(daysOfMonth+'tiene 30 dias') 
        break
    case 'julio':
        console.log(daysOfMonth+'tiene 31 dias') 
        break
    case 'agosto':
        console.log(daysOfMonth+'tiene 31 dias') 
        break
    case 'setiembre':
        console.log(daysOfMonth+'tiene 30 dias') 
        break
    case 'octubre':
        console.log(daysOfMonth+'tiene 31 dias') 
        break
    case 'noviembre':
        console.log(daysOfMonth+'tiene 30 dias') 
        break
    case 'diciembre':
        console.log(daysOfMonth+'tiene 31 dias') 
        break
    default:
        console.log('Lo digitado no es un mes')
  }