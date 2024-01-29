import React from "react";
import books1 from "../../images/34f999ce19af4a13c70c60b486f543fa.png";
import books2 from "../../images/243110b3d81b6405e210fa41c68972c8.png";
import books3 from "../../images/46b4ba51e739f6ccb01cf9009172226a.png";
import books4 from "../../images/483b2032b398cbb0312de6ecad5dd905.png";
import books5 from "../../images/2cd7e67fed15989a7fa9d1dcd8685275.png";
import books6 from "../../images/8b78741618cf54226873cce084e61195.png";

export default function Books01() {
  return (
    <div>
      <div className="container">
        <div className="">
          <div style={{ marginTop: "140px" }} className="flex justify-between">
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "500",
                color: "#19272E",
                marginTop: "-25px",
              }}
            >
              Books
            </h1>
            <p
              style={{ fontSize: "18px", fontWeight: "500", color: "#818EEA" }}
            >
              View all
            </p>
          </div>
          <div style={{ marginTop: "70px" }} className="flex gap-5">
            <div className="">
              <img
                style={{
                  width: "200px",
                  borderRadius: "8px",
                }}
                src={books1}
                alt=""
              />
              <h1
                style={{
                  width: "180px",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  color: "#19272E",
                }}
              >
                THE SUBTLE ART OF NOT GIVING A F*CK
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by Mark Manson
              </p>
            </div>
            <div className="">
              <img
                style={{
                  width: "200px",
                  borderRadius: "8px",
                }}
                src={books2}
                alt=""
              />
              <h1
                style={{
                  width: "180px",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  color: "#19272E",
                }}
              >
                8 RULES OF LOVE
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by Jay Shetty
              </p>
            </div>
            <div className="">
              <img
                style={{
                  width: "185px",
                  marginLeft: "10px",
                  borderRadius: "8px",
                }}
                src={books3}
                alt=""
              />
              <h1
                style={{
                  width: "180px",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  color: "#19272E",
                  marginLeft: "10px",
                }}
              >
                THE CREATIVE ACT
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                  marginLeft: "10px",
                }}
              >
                by Rick Rubin with Neil Strauss
              </p>
            </div>
            <div className="">
              <img
                style={{
                  width: "200px",
                  borderRadius: "8px",
                  height: "270px",
                }}
                src={books4}
                alt=""
              />
              <h1
                style={{
                  width: "180px",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  color: "#19272E",
                }}
              >
                THE BOY, THE MOLE, THE FOX AND THE HORSE
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by Charlie Mackesy
              </p>
            </div>
            <div className="">
              <img
                style={{
                  width: "200px",
                  borderRadius: "8px",
                }}
                src={books5}
                alt=""
              />
              <h1
                style={{
                  width: "180px",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  color: "#19272E",
                }}
              >
                HARRY POTTER
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by J.K. Rowling
              </p>
            </div>
            <div className="">
              <img
                style={{
                  width: "200px",
                  borderRadius: "8px",
                }}
                src={books6}
                alt=""
              />
              <h1
                style={{
                  width: "180px",
                  textAlign: "justify",
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  color: "#19272E",
                }}
              >
                IT ENDS WITH US
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by Colleen Hoover
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
