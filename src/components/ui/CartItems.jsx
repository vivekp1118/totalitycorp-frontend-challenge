import { Context } from "../../context/context";
import { useContext } from "react";

function CartItems(props) {
  const { removeFromCart, increaseQty, decreasQty } = useContext(Context);
  const bgImage = `/${props.imagePath}`;

  return (
    <div className="flex justify-between gap-5 px-2 py-8 sm:w-[500px] sm:gap-10 sm:p-10">
      <div
        style={{ backgroundImage: `url('${bgImage}')` }}
        className="h-[100px] w-[100px] rounded-2xl bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="flex w-[90px] flex-col justify-around sm:w-[150px]">
        <div className="font-med`ium text-lg">{props.title}</div>
        <div className="text-lg font-bold">₹ {props.price}</div>
      </div>
      <div className="flex flex-col justify-around">
        <div>
          <button
            className="rounded-xl bg-black p-2 text-white"
            onClick={() => decreasQty(props.id)}
          >
            -
          </button>
          <span className="inline-block w-[20px] text-center">
            {props.quantity}
          </span>
          <button
            className="rounded-xl bg-black p-2 text-white"
            onClick={() => increaseQty(props.id)}
          >
            +
          </button>
        </div>
        <div
          className="rounded-md bg-red-400 px-2 py-1"
          onClick={() => removeFromCart(props.id)}
        >
          Remove
        </div>
      </div>
    </div>
  );
}

export default CartItems;
