import { Routes, Route } from "react-router-dom";
import Index from "./index";
import All_Products from "./pages/All_ProductsListing";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/all-products" element={<All_Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
