// this file is an action creator
// actions creators returns actions
// action is an object at least a property type
// this action creator is going to be handed to dispatch


export default(operation,index) =>{

  console.log('update the produce food')
   console.log(index,'the index')

    return {
        type:'updateProduce',
        payload:{
          operation,
          index
        }
    }
}