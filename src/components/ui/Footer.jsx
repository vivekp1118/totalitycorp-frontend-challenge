import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="relative mt-[200px]">
      <div className="promotion absolute top-[-180px]  flex h-fit w-[350px] flex-col justify-between gap-10 self-center rounded-2xl bg-black p-8 sm:w-[90%] sm:px-14 sm:py-10 md:flex-row">
        <p className="text-xl font-extrabold leading-normal text-white sm:w-[400px] sm:text-[2rem]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>

        <div className="sm:w-[400px] ">
          <input
            type="text"
            placeholder="Enter Your Mail"
            className="mb-5 w-full rounded-3xl px-10 py-2"
          />
          <button className="w-full rounded-3xl bg-white py-2 text-lg font-extrabold text-black ">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="bg-[#F0F0F0] p-5 pt-24 sm:p-10">
        <h1
          className="cursor-pointer text-[2rem] font-bold"
          onClick={() => navigate("/")}
        >
          SHOP.CO
        </h1>
        <p className="text-sm text-gray-500">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="mt-10 flex h-[150px] shrink-0 basis-[160px] flex-col justify-between ">
            <p className="text-base font-medium">Company</p>
            <p className="text-sm font-normal text-gray-500">About</p>
            <p className="text-sm font-normal text-gray-500">Future</p>
            <p className="text-sm font-normal text-gray-500">Work</p>
            <p className="text-sm font-normal text-gray-500">Career</p>
          </div>

          <div className="mt-10 flex h-[150px] shrink-0 basis-[160px] flex-col justify-between ">
            <p className="text-base font-medium">Help</p>
            <p className="text-sm font-normal text-gray-500">
              Customer Support
            </p>
            <p className="text-sm font-normal text-gray-500">
              Delivery Details
            </p>
            <p className="text-sm font-normal text-gray-500">
              Terms & Conditions
            </p>
            <p className="text-sm font-normal text-gray-500">Privacy Policy</p>
          </div>

          <div className="mt-10 flex h-[150px] shrink-0 basis-[160px] flex-col justify-between ">
            <p className="text-base font-medium">FAQ</p>
            <p className="text-sm font-normal text-gray-500">Account</p>
            <p className="text-sm font-normal text-gray-500">
              Manage Deliveries
            </p>
            <p className="text-sm font-normal text-gray-500">Orders</p>
            <p className="text-sm font-normal text-gray-500">Payment</p>
          </div>

          <div className="mt-10 flex h-[150px] shrink-0 basis-[160px] flex-col justify-between ">
            <p className="text-base font-medium">RESOURCES</p>
            <p className="text-sm font-normal text-gray-500">Free eBook</p>
            <p className="text-sm font-normal text-gray-500">
              Development Tutorial
            </p>
            <p className="text-sm font-normal text-gray-500">How to - Blog</p>
            <p className="text-sm font-normal text-gray-500">
              Youtube Playlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
