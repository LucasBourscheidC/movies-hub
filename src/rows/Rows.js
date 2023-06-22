import React, { useState } from "react";
import "./rows.css";
import Card from "../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function Rows({ title, items, handleOverview}) {
  const [firstPoster, setFirstPoster] = useState(0);

  function updateRow(buttonSide) {
    if (buttonSide === "left") {
      setFirstPoster(() => {
        if(firstPoster - 5 < 0){
          return(items.results.length - 5);
        }
        else{
          return(firstPoster - 5);
        }
      });
    } else if (buttonSide === "right") {
      setFirstPoster(() => {
        if(firstPoster + 5 >= items.results.length){
          return 0;
        }
        else{
          return(firstPoster + 5);
        }
      });
    }
  }

  return (
    <div className="container-row">
      <div className="container-one">
        <h3>{title}</h3>
        <div className="active-rows">
          <div className="current-row"></div>
          <div className="current-row"></div>
          <div className="current-row"></div>
          <div className="current-row"></div>
        </div>
      </div>
      <div className="container-two">
      <button onClick={() => updateRow("left")} className="button-icon">
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </button>
        {items.results.length > 0 &&
          items.results.slice(firstPoster, firstPoster + 5).map( (item, key) => (
              <div className="div-posters" key={key}>
                <Card item={item} handleOverview={handleOverview}/>
              </div>
            ))}
            <button onClick={() => updateRow("right")} className="button-icon">
          <FontAwesomeIcon className="icon" icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
