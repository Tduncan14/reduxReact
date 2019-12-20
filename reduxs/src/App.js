import React from 'react';
import './App.css';
import FrozenDept from './Components/FrozenDepartment';
import ProduceDept from './Components/ProducerDepartment';
import MeatProduceDept from './Components/MeatDepartment';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   
   <FrozenDept />
   <ProduceDept/>
   <MeatProduceDept/>
    </div>
  );
}

export default App;
