import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import productData from "../data/products";

function ProductSlider({ type }) {
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);
  useEffect(() => {
    const productsArray = productData.filter(
      (product) => product.type === type,
    );
    setProducts(productsArray);
  }, []);
  const slider = useRef(null);
  const scrollRight = () => {
    if (slider.current) {
      slider.current.scrollBy({
        top: 0,
        left: -250,
        behavior: "smooth",
      });
    }
  };
  const scrollLeft = () => {
    if (slider.current) {
      slider.current.scrollBy({
        top: 0,
        left: 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative h-fit w-full overflow-hidden">
      <div
        className="absolute top-[40%] h-[50px] w-[50px] bg-black text-center text-2xl leading-[50px] text-white"
        onClick={scrollRight}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div
        className="absolute right-0 top-[40%] h-[50px] w-[50px] bg-black text-center text-2xl leading-[50px] text-white"
        onClick={scrollLeft}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <div
        ref={slider}
        className="slider flex flex-row flex-nowrap gap-10 overflow-x-scroll px-10"
      >
        {products != null &&
          products.map((product) => (
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
      <div className="my-10 flex items-center justify-center ">
        <div
          onClick={() => navigate("/all-products")}
          className="rounded-base w-fit cursor-pointer rounded-xl border border-gray-500 px-4 py-2 text-lg text-gray-500"
        >
          View all products
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
