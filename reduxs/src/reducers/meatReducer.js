

const meatData = [
    {
      meat:'steak',
      price:4
    },
    {
      meat:'lamb',
      price:24
    },
    {
     meat:'gyro',
     price:34
    }
]


export default (state = meatData ,action) =>{


  if(action.type === 'updateMeat'){

    let newState = [...state]

    console.log(newState,'new state')

    if(action.type === 'updateMeat'){


       if(action.payload.operation === '+'){
         console.log('hey')

         newState[action.payload.index].price++
       }

       else if(action.payload.operation === '-'){

        newState[action.payload.index].price--
       }
       else if(
        action.type === 'clearInventory'
      ){
        return [];
      }

  
      return newState
      
    }

     else{
       return state
     }

  }

  else{
    return state
  }
  
}