import React, { useState } from "react";

import Product from "../images/Product Image.png";
import Product1 from "../images/Product Image (1).png";
import Product2 from "../images/Product Image (2).png";
import Product3 from "../images/Product Image (3).png";
import Product4 from "../images/Product Image (4).png";
import Product5 from "../images/Product Image (5).png";
import Product6 from "../images/Product Image (6).png";
import Product7 from "../images/Product Image (7).png";
import Product8 from "../images/Product Image (8).png";

const booksData = [
  {
    image: Product,
    title: "THE SUBTLE ART OF NOT GIVING A F*CK",
    author: "by Mark Manson",
    genres: ["Self-Improvement"],
  },
  {
    image: Product1,
    title: "8 RULES OF LOVE",
    author: "by Jay Shetty",
    genres: ["Self-Improvement", "Romantic"],
  },
  {
    image: Product2,
    title: "THE CREATIVE ACT",
    author: "by Rick Rubin with Neil Strauss",
    genres: ["Creative", "Self-Improvement"],
  },
  {
    image: Product3,
    title: "THE BOY, THE MOLE, THE FOX AND THE HORSE",
    author: "by Charlie Mackesy",
    genres: ["Literature", "For kids"],
  },
  {
    image: Product4,
    title: "HARRY POTTER",
    author: "by J.K. Rowling",
    genres: ["Fantasy", "For kids"],
  },
  {
    image: Product5,
    title: "IT ENDS WITH US",
    author: "by Colleen Hoover",
    genres: ["Romantic"],
  },
  {
    image: Product6,
    title: "IT STARTS WITH US",
    author: "by Colleen Hoover",
    genres: ["Romantic"],
  },
  {
    image: Product7,
    title: "HEART BONES",
    author: "by Colleen Hoover",
    genres: ["Romantic"],
  },
  {
    image: Product8,
    title: "SOMEONE ELSE'S SHOES",
    author: "by Jojo Moyes",
    genres: ["Romantic"],
  },
];

export default function Books() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const doesBookMatchGenres = (bookGenres) => {
    if (selectedGenres.length === 0) {
      return true;
    } else {
      return selectedGenres.some((selectedGenre) =>
        bookGenres.includes(selectedGenre)
      );
    }
  };
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section id="Books">
      <div className="container">
        <div className="pt-[48px] p-[50px]">
          <h1 className="text-[36px] font-[600]">All Books</h1>
          <p className="text-[#19272E] text-[20px] opacity-[0.7] font-[400]">
            Here you can find all the books you need
          </p>
          <div className="pt-[75px] flex flex-col gap-[24px]">
            <div className="flex gap-[20px] relative">
              <h1 className="text-[22px]">Filters</h1>
              <button
                onClick={() => setSelectedGenres([])}
                className="text-[#818EEA] border-b border-[#818EEA]"
              >
                Clear filters
              </button>
              <div className="flex items-center  absolute right-0">
                <label htmlFor="sort-by" className="text-gray-700">
                  Sort by:
                </label>
                <select
                  name="sort-by"
                  id="sort-by"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="block appearance-none w-48 bg-white border border-[#818EEA] text-[#818EEA] py-2 px-4 pr-8 rounded leading-tight focus:outline-none "
                >
                  <option value="">Popular</option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            <h3>Genres</h3>
            <div className="flex gap-[80px]">
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Autographed Books")}
                    checked={selectedGenres.includes("Autographed Books")}
                  />{" "}
                  <span>Autographed Books</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Sci-Fi")}
                    checked={selectedGenres.includes("Sci-Fi")}
                  />{" "}
                  <span>Sci-Fi</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("For kids")}
                    checked={selectedGenres.includes("For kids")}
                  />{" "}
                  <span>For kids</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("For teenagers")}
                    checked={selectedGenres.includes("For teenagers")}
                  />{" "}
                  <span>For teenagers</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Finance")}
                    checked={selectedGenres.includes("Finance")}
                  />{" "}
                  <span>Finance</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Detective")}
                    checked={selectedGenres.includes("Detective")}
                  />{" "}
                  <span>Detective</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Romantic")}
                    checked={selectedGenres.includes("Romantic")}
                  />{" "}
                  <span>Romantic</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Psychology")}
                    checked={selectedGenres.includes("Psychology")}
                  />{" "}
                  <span>Psychology</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Self-Improvement")}
                    checked={selectedGenres.includes("Self-Improvement")}
                  />{" "}
                  <span>Self-Improvement</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Educational")}
                    checked={selectedGenres.includes("Educational")}
                  />{" "}
                  <span>Educational</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Literature")}
                    checked={selectedGenres.includes("Literature")}
                  />{" "}
                  <span>Literature</span>
                </div>
                <div className="flex gap-[16px]">
                  <input
                    type="checkbox"
                    onChange={() => toggleGenre("Religion")}
                    checked={selectedGenres.includes("Religion")}
                  />{" "}
                  <span>Religion</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-[10px]">
                {booksData
                  .filter((book) => doesBookMatchGenres(book.genres))
                  .map((book, index) => (
                    <div key={index} className="book-item">
                      <img src={book.image} alt={book.title} />
                      <h2 className="text-[18px] w-[200px] text-[#19272E] font-[600] ">
                        {book.title}
                      </h2>
                      <h4 className="text-[16px] font-[300] text-[#19272E]">
                        {book.author}
                      </h4>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
