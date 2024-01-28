import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { booksData } from "../../pages/books/Books";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const results = booksData.filter((book) =>
      book.title.toLowerCase().includes(normalizedQuery)
    );
    setSearchResults(results);
  };

  const handleBookSelect = (book) => {
    const bookIndex = selectedBooks.findIndex(
      (selectedBook) => selectedBook.title === book.title
    );
    if (bookIndex !== -1) {
      const updatedBooks = [...selectedBooks];
      updatedBooks.splice(bookIndex, 1);
      setSelectedBooks(updatedBooks);
    } else {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  const openModal = () => {
    performSearch();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    console.log("Selected Books:", selectedBooks);
    closeModal();
  };

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const cartItemsCount = cartItems.length;

  return (
    <header id="Header">
      <div className="flex justify-between items-center p-[20px] shadow-md">
        <div className="flex items-center">
          <NavLink className="text-[#818EEA] font-semibold" to={"/"}>
            BookShop
          </NavLink>
          <nav className="flex gap-4 ml-8">
            <NavLink to={"/categories"}>Categories</NavLink>
            <NavLink to={"/recent"}>Recent</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/aboutUs"}>AboutUs</NavLink>
          </nav>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button onClick={openModal}>
            <IoSearchOutline />
          </button>
          <div className="relative">
            <BiShoppingBag onClick={openModal} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cartItemsCount}
              </span>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              Close Modal
            </button>
            <h2>Search Results</h2>
            {searchResults.length === 0 ? (
              <p>No results found.</p>
            ) : (
              searchResults.map((book) => (
                <div key={book.title}>
                  <input
                    type="checkbox"
                    checked={selectedBooks.some(
                      (selectedBook) => selectedBook.title === book.title
                    )}
                    onChange={() => handleBookSelect(book)}
                  />
                  <label>{book.title}</label>
                  <button onClick={() => addToCart(book)}>Add to Cart</button>
                </div>
              ))
            )}
            <h2>Selected Books</h2>
            <ul>
              {selectedBooks.map((book) => (
                <li key={book.title}>{book.title}</li>
              ))}
            </ul>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </header>
  );
}
