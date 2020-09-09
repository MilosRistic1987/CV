import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './component/Home';
import Projects from './component/Projets'
import Interest from './component/Interest'
import About from './component/About'
import NavBar from './component/NavBar'


function App() {
  return (
   <div className='appWrapper'>
    <div className='borderWrapp'>
   <Router>
   <NavBar />
     <Switch>
       <Route exact path='/home' component={Home}/>
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/interest' component={Interest}/>
       <Route exact path='/about' component={About}/>
       <Redirect to="/home"/>
     </Switch>
   </Router>
 </div>
 </div>
  );
}

export default App;
