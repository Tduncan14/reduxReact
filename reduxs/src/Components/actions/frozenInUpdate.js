// this file is an action creator
//actions creators returns actions
// action is an object at least a property type//
// this action creator is going to be handed to the dispatch

export default(operation,index) =>{

 console.log('udate the frozen meatn',index,operation)
  return {
      type:'updateFrozen',
      payload:{
        operation,
        index
      }
  }

}