import { createContext, useEffect, useState } from "react";
import productsData from "../data/products";

const Context = createContext();

function ContextProvider({ children }) {
  const [isMoeldOpen, setIsMoeldOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(1);
  const [userDetails, serUserDetails] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardNo: "",
    expiryDate: "",
    cvv: "",
  });

  function resatAll() {
    setCart([]);
    setStep(1);
    serUserDetails({
      name: "",
      email: "",
      phoneNo: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      cardNo: "",
      expiryDate: "",
      cvv: "",
    });
    setTotal(0);
    setIsMoeldOpen(false);
  }

  function toggleModel() {
    setIsMoeldOpen((prev) => !prev);
  }
  function increaseStep() {
    setStep((prevStep) => prevStep + 1);
  }
  function setDetails(e) {
    serUserDetails((prevAddress) => ({
      ...prevAddress,
      [e.target.name]: e.target.value,
    }));
  }
  useEffect(() => {
    setCartTotal();
  }, [cart]);

  function setCartTotal() {
    if (cart) {
      let tempTotal = 0;
      cart.forEach((item) => {
        tempTotal += item.price * item.quantity;
      });
      setTotal(tempTotal);
    }
  }

  function addToCart(productId) {
    const itemExists = cart.find((item) => item.id === productId);
    if (itemExists) {
      itemExists.quantity += 1;
      setCartTotal();
      return;
    }
    const cartItem = products.find((item) => productId === item.id);
    cartItem.quantity = 1;
    setCart((prevCart) => [...prevCart, cartItem]);
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function increaseQty(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreasQty(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  function sortProducts(sortType) {
    setProducts((prevProducts) => {
      switch (sortType) {
        case "lowToHigh":
          return [...prevProducts].sort((a, b) => a.price - b.price);
        case "highToLow":
          return [...prevProducts].sort((a, b) => b.price - a.price);
        case "rating":
          return [...prevProducts].sort((a, b) => b.ratingNum - a.ratingNum);
        default:
          return prevProducts;
      }
    });
  }

  return (
    <Context.Provider
      value={{
        total,
        products,
        cart,
        userDetails,
        step,
        isMoeldOpen,
        addToCart,
        removeFromCart,
        sortProducts,
        increaseQty,
        decreasQty,
        setDetails,
        increaseStep,
        toggleModel,
        resatAll,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
