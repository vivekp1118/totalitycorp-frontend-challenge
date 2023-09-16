import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex h-auto items-center justify-between gap-10 px-10 py-5">
      <h1
        className="cursor-pointer text-[2rem] font-bold"
        onClick={() => navigate("/")}
      >
        SHOP.CO
      </h1>

      <div className="" onClick={() => navigate("/cart")}>
        <i className="fa-solid fa-cart-shopping cursor-pointer text-2xl"></i>
      </div>
    </nav>
  );
}

export default Navbar;
