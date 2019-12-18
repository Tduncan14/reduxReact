import React,{Component} from 'react';

import {connect} from 'react-redux';




class MeatDepartment extends Component {





    increment =(operation,index) =>{



        if(operation === '+'){



        }
        else if(operation === '-'){


        }
    }


    render(){

      
        const meatDepart = this.props.meat.map((item,index)=>{

            return 
            <div key={item}>
            <li key={index}>{item.meat}:${item.price}</li>
            <input type="button" onClick={() =>{
                this.increment('+',index)}
            } />
            <input type="button" onClick={() =>{
                this.increment('-',index)}
            } />
            </div>
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


export default connect(mapStateToProps)(MeatDepartment)