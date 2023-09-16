import Header from "../components/ui/Header";
import ProductSlider from "../components/ProductsSlider";

function SaleProducts() {
  return (
    <>
      <Header header={"top selling"} />
      <ProductSlider type={"popular"} />
    </>
  );
}

export default SaleProducts;
