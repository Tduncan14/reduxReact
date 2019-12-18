import React,{Component} from 'react';
// we want this component to know about redux
//and to connect it we need react-redux
import {connect} from 'react-redux';



class FrozenDept extends Component{





    render()
    {
        
        console.log(this.props.frozen,"frozen inventory")
        const frozenInventory = this.props.frozen.map((item,index)=>(


     <li key={index}>{item.food}:{item.quantity}</li>




        ))

       

        return(
            <>
            <h1>Frozen Department</h1>
            <ul>
                {frozenInventory}
            </ul>

            </>
        )
    }
}

console.log(connect);
// connects two args
// a first one is a function that is going to map a piece of redux state to the component props
// mapStateToProps takes one 1 which is the rootReducer/state

function mapStateToProps(state){

    // returns on object with the local prop name to this component
    // value will be the property in the rootReducer
    //the piece of the store

    return{
        frozen:state.frozen,
     
    }

}

export default connect(mapStateToProps)(FrozenDept);