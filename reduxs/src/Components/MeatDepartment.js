import React,{Component} from 'react';

import {connect} from 'react-redux';




class MeatDepartment extends Component {







    render(){

      
        const meatDepart = this.props.meat.map((item,index)=>{

            return <li key={index}>{item.meat}:${item.price}</li>
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