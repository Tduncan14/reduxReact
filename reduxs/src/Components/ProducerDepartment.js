import React,{Component} from 'react';
// we want this component to know about redux
// and to connect it we need react-redux

import {connect} from 'react-redux';



class ProduceDept extends Component {






    render(){

       console.log(this.props.produce,"vegetable food")


       const produceInventory =
       this.props.produce.map((item,index) =>{

        return <li key={index}>{item.produce}:${item.price}</li>
       })




       return(
           <>
           <h1>Produce Department</h1>

           <ul>
            {produceInventory}
           </ul>
           </>
       )
    }

}




function mapStateToProps(state){

   // returns on object with the local prop
 //to this component
 // value will be the property in the the root reducer

    return{
        produce:state.producer
    }
}


export default connect(mapStateToProps)(ProduceDept)