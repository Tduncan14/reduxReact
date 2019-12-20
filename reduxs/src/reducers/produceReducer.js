// all reducers have 2 params
// 1.current State
// 2.info that came from any action


const producerData = [
    {
      produce:'Oranges',
      price:25
    },
    {
      produce:'Apples',
      price:50
    },
    {
      produce:'Spinachs',
      price:40
    }
]

export default( state = producerData, action) => {



   const newState = [...state];


   if(action.type === 'updateProduce'){
          

    console.log('hey are you working')
    if(action.payload.operation === '+'){
  
      newState[action.payload.index].price++
      
    }

    else if(action.payload.operation === '-'){

      console.log('go down')
      newState[action.payload.index].price--
    }

    return newState

   }
    return state
}

// another example/written as 


// function producer(state = producerData,action){


//     return state
// }

// export default Producer