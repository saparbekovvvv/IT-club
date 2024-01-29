import React from "react";
import book1 from "../../images/d479e63c7133e8c339599cf5fb21f869.png";
import book2 from "../../images/df318f90109ac54a78d55bc98e359268.png";
import book3 from "../../images/6fb5c80767c52826306bdfd0ad94938c.png";

export default function NewBooks() {
  return (
    <div>
      <div className="container">
        <div className="">
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "500",
              color: "#19272E",
              textAlign: "center",
              marginTop: "112px",
            }}
          >
            New Books
          </h1>
          <div
            style={{ marginTop: "100px" }}
            className=" flex justify-center gap-16"
          >
            <div className="book1">
              <img
                style={{
                  width: "200px",
                  borderRadius: "8px",
                }}
                src={book1}
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
                The Climate Book: The Facts and the Solutions
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by Greta Thunberg
              </p>
            </div>
            <div className="book2">
              <img
                style={{ width: "200px", borderRadius: "8px" }}
                src={book2}
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
                The Climate Book: The Facts and the Solutions
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by Greta Thunberg
              </p>
            </div>
            <div className="book3">
              <img
                style={{ width: "200px", borderRadius: "8px" }}
                src={book3}
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
                The Climate Book: The Facts and the Solutions
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#19272E",
                }}
              >
                by Greta Thunberg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
