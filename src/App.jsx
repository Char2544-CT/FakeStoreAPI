import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ProductListing from "./ProductListing";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProductForm";
import EditProduct from "./EditProductForm";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
