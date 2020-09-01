import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './component/Home';
import Projects from './component/Projets'
import Interest from './component/Interest'


function App() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/interest' component={Interest}/>
     </Switch>
   </Router>
  </>
  );
}

export default App;
