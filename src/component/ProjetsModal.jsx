import React, { useState, useEffect } from "react";
import ProjectCard from "../component/ProjectCard";
import projectsData from "../data/projects.json";
import ModalNav from "../component/ModalNav";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ProjetsModal = ({ isModalOpen, setModalOpen, isMobile }) => {
  const modalClassName = isModalOpen ? "modalDisplayGrid" : "modalDisplayNone";
  const [indexes, setIndexes] = useState({ startIndex: 0, endIndex: 3 });
  const [mobileIndexes, setMobileIndexes] = useState({
    startMobileIndex: 0,
    endMobileIndex: 1,
  });
  const [projectsCategory, setProjectsCategory] = useState(projectsData);
  const [selectedProjetcsCategory, setSelectedProjetcsCategory] = useState(
    "All"
  );

  useEffect(() => {
    const filteredProjectsData =
      selectedProjetcsCategory !== "All"
        ? projectsData.filter((el) => el.category === selectedProjetcsCategory)
        : projectsData;
    setIndexes({ startIndex: 0, endIndex: 3 });
    setProjectsCategory(filteredProjectsData);
  }, [selectedProjetcsCategory]);

  const handleModaleCLose = () => {
    setModalOpen(false);
  };

  const handlePagination = (type) => {
    if (type === "next") {
      isMobile
        ? setMobileIndexes({
            ...mobileIndexes,
            startMobileIndex: mobileIndexes.startMobileIndex + 1,
            endMobileIndex: mobileIndexes.endMobileIndex + 1,
          })
        : setIndexes({
            ...indexes,
            startIndex: indexes.startIndex + 3,
            endIndex: indexes.endIndex + 3,
          });
    } else {
      isMobile
      ? setMobileIndexes({
          ...mobileIndexes,
          startMobileIndex: mobileIndexes.startMobileIndex - 1,
          endMobileIndex: mobileIndexes.endMobileIndex - 1,
        })
      : setIndexes({
          ...indexes,
          startIndex: indexes.startIndex - 3,
          endIndex: indexes.endIndex - 3,
        });
    }
  };

  return (
    <div className={modalClassName}>
      <ModalNav
        selectedProjetcsCategory={selectedProjetcsCategory}
        setSelectedProjetcsCategory={setSelectedProjetcsCategory}
      />
      <div className="projetsList">
        { isMobile ? projectsCategory
          .slice(mobileIndexes.startMobileIndex, mobileIndexes.endMobileIndex)
          .map((el) => (
            <ProjectCard cardData={el} key={el.id} />
          )):projectsCategory.slice(indexes.startIndex, indexes.endIndex).map((el)=>(  <ProjectCard cardData={el} key={el.id} />))}
      </div>
      <div className="pagginationWrapp">
        <div>
          <button
            disabled={indexes.startIndex === 0}
            onClick={() => handlePagination("previous")}
          >
            <FaAngleLeft className="paginationIcon" />
          </button>
          <button
            disabled={projectsCategory.length <= indexes.endIndex}
            onClick={() => handlePagination("next")}
          >
            <FaAngleRight className="paginationIcon" />
          </button>
        </div>
      </div>
      <div className="modalBtnWrapp">
        <button className="mainBtn" onClick={() => handleModaleCLose()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjetsModal;
