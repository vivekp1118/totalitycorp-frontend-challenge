import Header from "./ui/Header";
import Navbar from "./Nav";
import { useContext } from "react";
import { Context } from "../context/context";
import CartItems from "./ui/CartItems";
import Footer from "./ui/Footer";
import Model from "./ui/Model";
function Cart() {
  const { cart, total, isMoeldOpen, toggleModel } = useContext(Context);

  return (
    <>
      {isMoeldOpen && <Model />}
      <div className="h-[100%] w-full">
        <Navbar />
        <Header header={"Your Cart"} />
        <div className="flex flex-col items-center justify-center">
          {cart.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
        </div>
        <div className="border-t-2 border-black p-10">
          <p className="mb-5 w-full text-center text-2xl">Order Summary :</p>
          <div className="mx-[auto] my-5 flex justify-between text-xl font-normal sm:w-[500px]">
            <div>Total</div>
            <div>{total}</div>
          </div>
          <div className="border-t-1 mx-[auto] border border-black sm:w-[500px]"></div>
          <button
            className="mx-[auto] mt-10 block rounded-xl bg-black px-4 py-2 text-center text-white sm:w-[500px] "
            onClick={toggleModel}
          >
            Go To Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
