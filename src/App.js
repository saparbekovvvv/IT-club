import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import BookShop from "./components/bookShop/BookShop";
import Categories from "./pages/categories/Categories";
import Recent from "./pages/recent/Recent";
import Books from "./pages/books/Books";
import AboutUs from "./pages/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BookShop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/books" element={<Books />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
