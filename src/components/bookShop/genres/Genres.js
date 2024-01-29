import React from "react";
import card from "../../images/card.png";
import card1 from "../../images/card (1).png";
import card2 from "../../images/card (2).png";
import card3 from "../../images/card (3).png";
import card4 from "../../images/card (4).png";
import card5 from "../../images/card (5).png";
export default function Genres() {
  return (
    <div>
      <div className="container">
        <div style={{ marginTop: "140px" }} className=" justify-center">
          <div className="flex justify-between">
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "500",
                color: "#19272E",
                marginTop: "-25px",
              }}
            >
              Genres
            </h1>
            <p
              style={{ fontSize: "18px", fontWeight: "500", color: "#818EEA" }}
            >
              View all
            </p>
          </div>
          <div
            style={{ marginTop: "60px" }}
            className="flex justify-center gap-14"
          >
            <img src={card} alt="" />
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
            <img src={card4} alt="" />
            <img src={card5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
