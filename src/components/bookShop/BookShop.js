import React from "react";
import Genres from "./genres/Genres";

export default function BookShop() {
  return (
    <div>
      <section
        id="bookShop"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="container">
          <div className="text-center">
            <h1 className="text-[#fff] text-[48px]">Welcome to our Bookshop</h1>
            <p>A place where you can get all the books you want!</p>
          </div>
        </div>
      </section>
      <Genres />
    </div>
  );
}
