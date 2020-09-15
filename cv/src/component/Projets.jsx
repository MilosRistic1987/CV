import React, { useState } from "react";
import ProjetsModal from "../component/ProjetsModal";
import PageCounter from "../component/PageCounter";
import AbsoluteDiv from "./AbsoluteDiv";

const Projects = ({ setModalOpen }) => {
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <AbsoluteDiv>
      <div className="projectWrapp">
        <div className="projetsInfoWrapp">
          <div className="pageCounter pageCounterProject">
            <PageCounter pageNumber={"02"} />
          </div>
          <div className="projectInfo">
            <div>
              <h1>
                Welcome To <span>Projects</span> room
              </h1>
              <button className="mainBtn" onClick={() => handleModalOpen()}>
                See all projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteDiv>
  );
};

export default Projects;
