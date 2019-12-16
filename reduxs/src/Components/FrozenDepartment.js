import React,{Component} from 'react';
// we want this component to know about redux
//and to connect it we need react-redux
import {connect} from 'react-redux';



class FrozenDept extends Component{





    render(){

        return(
            <>
            <h1>Frozen Department</h1>
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

    }

}

export default connect()(FrozenDept);