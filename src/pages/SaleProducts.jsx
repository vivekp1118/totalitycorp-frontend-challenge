import Header from "../components/ui/Header";
import ProductSlider from "../components/ProductsSlider";

function SaleProducts() {
  return (
    <>
      <Header header={"On Sale"} />
      <ProductSlider type={"onSale"} />
    </>
  );
}

export default SaleProducts;
