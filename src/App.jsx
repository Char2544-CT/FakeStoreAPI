import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
