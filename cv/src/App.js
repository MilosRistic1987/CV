import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './component/Home';
import Projects from './component/Projets'
import Interest from './component/Interest'
import About from './component/About'
import NavBar from './component/NavBar'
import  NavBarBurger from './component/NavBarBurger'


function App() {

 

  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

  return (
   <div className='appWrapper' >
    <div className='borderWrapp' >
   <Router>
 <NavBar/>
     <Switch>
       <Route exact path='/home' component={Home} />
       <Route exact path='/projects' component={Projects}  />
       <Route exact path='/interest' component={Interest} />
       <Route exact path='/about' component={About} />
       <Redirect to="/home"/>
     </Switch>
   </Router>
 </div>
 </div>
  );
}

export default App;
