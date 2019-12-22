import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import clear from './actions/clearAll';


class Main extends Component {





    render(){

        this.props.clearInventory();

        const frozenQuantity = this.props.frozen.reduce((accum,frozenItem)=> accum + frozenItem.quantity,0)

        const meatQuantity = this.props.meat.reduce((accum,meatItem)=> accum + meatItem.price,0)

        const produceQuantity = this.props.produce.reduce((accum,produceItem)=> accum + produceItem.price,0)
       

        return(
            <>
            <h2>FrozenDept:{frozenQuantity}</h2>
            <h2>MeatDept:{meatQuantity}</h2>
            <h2>ProduceDept:{produceQuantity}</h2>
             <button
              onClick={this.props.clearInventory}>
                 clear
             </button>

            </>
            
        )
    }
}


function mapStateToProps(state){

    return{
        frozen:state.frozen,
        meat:state.meat,
        produce:state.producer

    }
}

function mapDispatchProps(dispatch){


    return bindActionCreators({

        clearInventory:clear
    },dispatch)

}

export default connect(mapStateToProps,mapDispatchProps)(Main)