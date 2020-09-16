import React, { useEffect, useState } from "react";

const ModalNav = ({
  selectedProjetcsCategory,
  setSelectedProjetcsCategory,
}) => {
  const initialNavNames = [
    { name: "All", key: "1", className: "modalNavLinks" },
    { name: "React JS", key: "2", className: "modalNavLinks" },
    { name: "Adobe", key: "3", className: "modalNavLinks" },
    { name: "Html5/Css3", key: "1", className: "modalNavLinks" },
  ];

  const [navNames, setNavNames] = useState(initialNavNames);

  useEffect(() => {
    const updatedNavNames = initialNavNames.map((el) =>
      el.name === selectedProjetcsCategory
        ? { ...el, className: `modalNavLinksSelected` }
        : el
    );
    setNavNames(updatedNavNames);
  }, [selectedProjetcsCategory]);

  const handleCategory = (category) => {
    setSelectedProjetcsCategory(category);
  };

  return (
    <div className="modalNav">
      {navNames.map((el) => (
        <div className={el.className}>
          <h1 onClick={() => handleCategory(el.name)}>{el.name}</h1>
        </div>
      ))}
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default ModalNav;
