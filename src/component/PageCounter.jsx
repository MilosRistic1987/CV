import React, { useState } from "react";
import { useEffect } from "react";

const PageCounter = ({ pageNumber }) => {
  const initialPageNumbersState = [
    {
      number: "01",
      className: "defaultPageNumber",
      id: "101",
      pseudo: "before",
    },
    {
      number: "02",
      className: "defaultPageNumber",
      id: "102",
      pseudo: "after",
    },
    {
      number: "03",
      className: "defaultPageNumber",
      id: "103",
      pseudo: "before",
    },
    {
      number: "04",
      className: "defaultPageNumber",
      id: "104",
      pseudo: "before",
    },
  ];
  const [pageNumbers, setPageNumbers] = useState(initialPageNumbersState);

  useEffect(() => {
    const updatedPageNumbersState = initialPageNumbersState.map((el) =>
      el.number === pageNumber ? { ...el, className: `selectedPageNumber` } : el
    );
    setPageNumbers(updatedPageNumbersState);
  }, [pageNumber]);

  return (
    <div>
      <div>
        {pageNumbers.map((el) => (
          <h1 className={el.className} key={el.id}>
            {el.number}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default PageCounter;
