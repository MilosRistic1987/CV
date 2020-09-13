import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './component/Home';
import Projects from './component/Projets'
import Interest from './component/Interest'
import About from './component/About'
import NavBar from './component/NavBar'
import  NavBarBurger from './component/NavBarBurger'


function App() {

 

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

console.log(isMobile)

  return (
   <div className='appWrapper'  >
    <div className='borderWrapp' id='borderWrapp' >
   <Router>
     <div className='navBarWrapp'>
 {!isMobile?<NavBar/>:<NavBarBurger pageWrapId={"page-wrap"} outerContainerId={"borderWrapp"}/>}
 </div>
 <div id="page-wrap">
     <Switch>
       <Route exact path='/home' component={Home} />
       <Route exact path='/projects' component={Projects}  />
       <Route exact path='/interest' component={Interest} />
       <Route exact path='/about' component={About} />
       <Redirect to="/home"/>
     </Switch>
     </div>
   </Router>
 </div>
 </div>
  );
}

export default App;
