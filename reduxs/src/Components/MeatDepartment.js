import React,{Component} from 'react';

import {connect} from 'react-redux';

import updateMeat from './actions/meatupdate';

import {bindActionCreators} from 'redux';

class MeatDepartment extends Component {





    increment =(operation,index) =>{



      this.props.updateMeat(operation,index)
    }


    render(){

      
        const meatDepart = this.props.meat.map((item,index)=>{

            return (
            <div key={index}>
            <li >{item.meat}:${item.price}</li>
            <input type="button" onClick={() =>{
                this.increment('+',index)}
            
            } value="+" />
            <input type="button" onClick={() =>{
                this.increment('-',index)}
            } value="-"/>
            </div>
            )
        })
        return(
            <>
              <h1>Meat Department</h1>

              <ul>
                  {meatDepart}
              </ul>
            </>
        )
    }
}





function mapStateToProps(state){





    return{

        meat:state.meat

    }
}


function mapDispatchToProps(dispatch){






    return bindActionCreators({

        updateMeat:updateMeat

    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(MeatDepartment)