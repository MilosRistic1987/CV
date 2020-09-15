import React, { useContext, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { __RouterContext } from "react-router";
import Home from "./component/Home";
import Projects from "./component/Projets";
import Interest from "./component/Interest";
import About from "./component/About";
import NavBar from "./component/NavBar";
import NavBarBurger from "./component/NavBarBurger";
import ProjetsModal from "./component/ProjetsModal";
import AboutModal from "./component/AboutModal";
import { useTransition, animated } from "react-spring";

function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: "translate(100%,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate(0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate(-50%,0)",
    },
  });

  var isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;
 
  const [isModalOpen, setModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  return (
    <div className="appWrapper">
      <ProjetsModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <AboutModal
        aboutModalOpen={aboutModalOpen}
        setAboutModalOpen={setAboutModalOpen}
      />
      <div className="borderWrapp" id="borderWrapp">
        {isMobile ? (
          <NavBarBurger
          pageWrapId={"page-wrap"}
          outerContainerId={"borderWrapp"}
        />
          
        ) : (
          <NavBar />
        )}
        <div id="page-wrap">
          {transitions.map(({ item, props, key }) => (
            <animated.div className="animatedDiv" key={key} style={props}>
              <Switch location={item}>
                <Route exact path="/home" component={Home} />
                <Route
                  exact
                  path="/projects"
                  component={() => <Projects setModalOpen={setModalOpen} />}
                />
                <Route exact path="/interest" component={Interest} />
                <Route
                  exact
                  path="/about"
                  component={() => (
                    <About setAboutModalOpen={setAboutModalOpen} />
                  )}
                />
                <Redirect to="/home" />
              </Switch>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
