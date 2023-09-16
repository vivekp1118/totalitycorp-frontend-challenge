import { useContext } from "react";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";
function Model() {
  const { userDetails, setDetails, step, increaseStep, toggleModel, resatAll } =
    useContext(Context);
  const navigate = useNavigate();
  return step === 1 ? (
    <div className="modal-shadow fixed bottom-0 left-0 right-0 top-0 z-10 m-[auto] flex h-fit w-[350px] flex-col items-center gap-6 rounded-2xl bg-black p-10">
      <div
        className="absolute right-3 top-3 h-6 w-6 cursor-pointer rounded-lg bg-red-400 text-center leading-6"
        onClick={toggleModel}
      >
        x
      </div>
      <input
        placeholder="Name"
        className="h-fit w-[280px] rounded-lg px-4 py-2"
        name="name"
        value={userDetails.name}
        onChange={(e) => setDetails(e)}
      />
      <input
        placeholder="Mali"
        className="h-fit w-[280px] rounded-lg px-4 py-2"
        name="email"
        type="mail"
        value={userDetails.email}
        onChange={(e) => setDetails(e)}
      />
      <input
        placeholder="Phone No"
        className="h-fit w-[280px] rounded-lg px-4 py-2"
        name="phoneNo"
        value={userDetails.phoneNo}
        onChange={(e) => setDetails(e)}
      />
      <textarea
        placeholder="Address"
        className="h-fit w-[280px] resize-none rounded-lg px-4 py-2"
        resize="none"
        name="address"
        value={userDetails.address}
        onChange={(e) => setDetails(e)}
      />
      <div className="flex h-fit w-[280px] justify-between">
        <input
          placeholder="City"
          className="h-fit w-[120px] rounded-lg px-4 py-2"
          name="city"
          value={userDetails.city}
          onChange={(e) => setDetails(e)}
        />
        <input
          placeholder="State"
          className="h-fit w-[120px] rounded-lg px-4 py-2"
          name="state"
          value={userDetails.state}
          onChange={(e) => setDetails(e)}
        />
      </div>
      <input
        placeholder="Pincode"
        className="h-fit w-[280px] rounded-lg px-4 py-2"
        name="pincode"
        value={userDetails.pincode}
        onChange={(e) => setDetails(e)}
      />
      <button
        className="h-fit w-[280px] rounded-lg bg-white px-4 py-2"
        onClick={increaseStep}
      >
        Next
      </button>
    </div>
  ) : step === 2 ? (
    <div className="modal-shadow fixed bottom-0 left-0 right-0 top-0 z-10 m-[auto] flex h-fit w-[350px] flex-col items-center gap-6 rounded-2xl bg-black p-10">
      <div
        className="absolute right-3 top-3 h-6 w-6 cursor-pointer rounded-lg bg-red-400 text-center leading-6"
        onClick={toggleModel}
      >
        x
      </div>
      <input
        placeholder="Card No"
        className="h-fit w-[280px] rounded-lg px-4 py-2"
        name="cardNo"
        value={userDetails.cardNo}
        onChange={(e) => setDetails(e)}
      />

      <div className="flex h-fit w-[280px] justify-between">
        <input
          placeholder="Expiry Date"
          className="h-fit w-[120px] rounded-lg px-4 py-2"
          name="expiryDate"
          value={userDetails.expiryDate}
          onChange={(e) => setDetails(e)}
        />
        <input
          placeholder="CVV"
          className="h-fit w-[120px] rounded-lg px-4 py-2"
          name="cvv"
          value={userDetails.cvv}
          onChange={(e) => setDetails(e)}
        />
      </div>

      <button
        className="h-fit w-[280px] rounded-lg bg-white px-4 py-2"
        onClick={increaseStep}
      >
        Complete Order
      </button>
    </div>
  ) : (
    <div className="modal-shadow fixed bottom-0 left-0 right-0 top-0 z-10 m-[auto] flex h-fit w-[350px] flex-col items-center justify-center gap-6 rounded-2xl bg-black p-10">
      <div
        className="absolute right-3 top-3 h-6 w-6 cursor-pointer rounded-lg bg-red-400 text-center leading-6"
        onClick={toggleModel}
      >
        x
      </div>
      <p className="text-xl font-bold text-green-400">
        Order Placed Successfully
      </p>
      <div className="text-[2rem] text-green-400">
        <i className="fa-solid fa-circle-check"></i>
      </div>
      <button
        className="h-fit w-fit rounded-lg bg-green-400 px-4 py-2 font-bold text-black"
        onClick={() => {
          resatAll();
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Model;
