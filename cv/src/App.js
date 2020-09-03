import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './component/Home';
import Projects from './component/Projets'
import Interest from './component/Interest'
import About from './component/About'


function App() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path='/home' component={Home}/>
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/interest' component={Interest}/>
       <Route exact path='/about' component={About}/>
     </Switch>
   </Router>
  </>
  );
}

export default App;
