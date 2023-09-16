import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import SaleProducts from "./pages/SaleProducts";
import PopularProducts from "./pages/PopularProducts";
import Footer from "./components/ui/Footer";

function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <SaleProducts />
      <PopularProducts />
      <Footer />
    </>
  );
}

export default Index;
