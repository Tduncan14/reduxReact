import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {






    render(){



        return(

        <ul>
            <li><Link to="/entire-store">Entire Store</Link></li>
         <li><Link to="/produce-depth">Produce</Link></li>
         <li><Link to="/meat-depth">Meat</Link></li>
         <li><Link to="/frozen-depth">Frozen</Link></li>
        </ul>
        )
    }
}


export default Navbar