import React from 'react';
import './App.css';
import FrozenDept from './Components/FrozenDepartment';
import ProduceDept from './Components/ProducerDepartment';
import MeatProduceDept from './Components/MeatDepartment';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import FrozenDepartment from './Components/FrozenDepartment';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
function App() {
  return (
    <Router>
    <div className="App">
    <Route path ="/" component={Navbar}/>
    <Route path ="/frozen-depth" component={FrozenDepartment}/>
    <Route path ="/meat-depth" component={MeatProduceDept}/>
    <Route path="/produce-depth" component={ProduceDept} />
    <Route path="/entire-store" component={Main}/>
    </div>
    </Router>
  );
}

export default App;
