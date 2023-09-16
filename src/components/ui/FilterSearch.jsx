import { useState, useContext } from "react";
import { Context } from "../../context/context";
function FilterSearch() {
  const { sortProducts, addToCart } = useContext(Context);
  const [filter, setFilter] = useState({
    tshirt: true,
    jeans: true,
    shirt: true,
  });

  return (
    <div className="flex h-14 w-full flex-wrap items-center justify-between bg-black px-5 font-medium">
      <select className="w-fit px-2">
        <option value="lowToHigh" onClick={() => sortProducts("lowToHigh")}>
          Price - Low to High
        </option>
        <option value="hightToLow " onClick={() => sortProducts("highToLow")}>
          Price - High to Low
        </option>
        <option
          value="ratig
        "
          onClick={() => sortProducts("rating")}
        >
          Rating
        </option>
      </select>
    </div>
  );
}

export default FilterSearch;
