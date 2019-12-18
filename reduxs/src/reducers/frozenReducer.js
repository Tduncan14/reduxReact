// all reducers have 2 params
// 1.current State
// 2.info that came from any action



const seedData = [
    {
      food:"TV dinners",
      quantity:10
    },
    {
      food:"Water",
      quantity:5
    },
    {
      food:"Chicken",
      quantity:10
    },
]

export default (state = seedData,action) => {

  return state
}

// also can be written as 

// function frozen(state = [],action){


//     return state;
// }

// export default frozen