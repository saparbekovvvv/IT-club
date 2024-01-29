import React from "react";
import AboutBooks from "../../images/books.png";

export default function AboutUs() {
  return (
    <div>
      <div className="container">
        <div style={{ marginTop: "140px" }} className="">
          <h1
            style={{
              color: "#19272E",
              fontSize: "48px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            About Us
          </h1>
        </div>
        <div className=" flex justify-center gap-14">
          <img style={{ width: "500px" }} src={AboutBooks} alt="" />
          <p
            style={{
              color: "#19272E",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "justify",
              width: "500px",
              marginTop: "150px",
            }}
          >
            We believe that books have the power to change lives, and we're
            dedicated to helping our customers find the perfect book for them.
            Whether you're looking for an escape from reality, an educational
            read, or a book to inspire you, we've got you covered.
            <br /> Thank you for choosing to shop with us. We look forward to
            helping you discover your next favorite book!
          </p>
        </div>
      </div>
    </div>
  );
}
