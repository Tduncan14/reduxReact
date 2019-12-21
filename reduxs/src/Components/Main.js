import React,{Component} from 'react';
import {connect} from 'react-redux';




class Main extends Component {





    render(){

        const frozenQuantity = this.props.frozen.reduce((accum,frozenItem)=> accum + frozenItem.quantity,0)

        const meatQuantity = this.props.meat.reduce((accum,meatItem)=> accum + meatItem.price,0)

        const produceQuantity = this.props.frozen.reduce((accum,produceItem)=> accum + produceItem.quantity,0)
       

        return(
            <>
            <h2>FrozenDept:{frozenQuantity}</h2>
            <h2>MeatDept:{meatQuantity}</h2>
            <h2>ProduceDept:{produceQuantity}</h2>


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

export default connect(mapStateToProps)(Main)