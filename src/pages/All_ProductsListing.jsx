import Navbar from "../components/Nav";
import Card from "../components/Card";
import Header from "../components/ui/Header";
import FilterSearch from "../components/ui/FilterSearch";
import { useContext } from "react";
import { Context } from "../context/context";
import Footer from "../components/ui/Footer";

function All_Products() {
  const { products } = useContext(Context);
  const productsData = products;
  return (
    <siv className>
      <Navbar />
      <FilterSearch />
      <div>
        <Header header={"All Products"} />
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">
          {productsData.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              imagePath={product.imagePath}
              title={product.title}
              ratingStars={product.ratingStars}
              ratingNum={product.ratingNum}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </siv>
  );
}

export default All_Products;
