import { useContext } from "react";
import { Context } from "../context/context";

function Card(props) {
  const { addToCart } = useContext(Context);
  const bgImage = `/${props.imagePath}`;
  return (
    <div className="flex h-[auto] w-[240px] flex-shrink-0 flex-col gap-2">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={` flex h-[240px] w-[100%] overflow-hidden rounded-xl bg-contain bg-center bg-no-repeat`}
      ></div>

      <h2 className="inline-block text-xl font-bold">{props.title}</h2>
      <p className="text-sm">
        {props.ratingStars} {props.ratingNum}/5
      </p>

      <p className="text-2xl font-bold">₹ {props.price}</p>
      <button
        className="rounded-xl bg-black p-2 text-white"
        onClick={() => addToCart(props.id)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;
