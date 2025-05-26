import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ProductListing from "./ProductListing";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
