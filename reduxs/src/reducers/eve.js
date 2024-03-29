export default (state = seedData, action)=>{
    console.log("Frozen Reducer is running!");
    console.log(action);
    if(action.type === 'updateFrozen'){
        console.log("I care about this action!!!");
        // we make a copy of state, because WE NEVER EVER EVER mutate state
        let newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.index].quantity++    
        }else if(action.payload.operation === '-'){
            newState[action.payload.index].quantity--
        }
        return newState;
    }else if(action.type === 'clearInventory'){
        let newState = [...state];
        newState.forEach((item,i)=>{
            item.quantity = 0;
        })
        return newState;
    }else{
        return state;
    }
}


// function frozen(state = [],action){
//     return state;
// }
// export default frozen;