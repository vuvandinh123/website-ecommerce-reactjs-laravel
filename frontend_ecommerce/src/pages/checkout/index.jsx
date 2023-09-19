import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppURL } from "../../api/AppURL";

const CheckoutPage = () => {
  const { orderAr } = useSelector((state) => state.checkout);
  const { cartAr } = useSelector((state) => state.cart);
  console.log(orderAr);
  let totalCart = 0;
  cartAr.forEach((item) => {
    totalCart += item.total;
  });
  if (orderAr.coupon) {
    var total = totalCart - (totalCart * orderAr.coupon / 100) ;
  }
  return (
    <div className="">
      <div className=" h-36 text-black flex justify-center items-center flex-col gap-y-3">
        <h2 className="text-4xl font-semibold">Check out</h2>
        <div>
          <ul className="flex items-center gap-x-2">
            <li>
              <Link to={"/"} className="text-gray-500 hover:underline" href="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to={"/cart"} className="text-gray-500 hover:underline" href="">
                Cart
              </Link>
            </li>
            <li>/</li>

            <li>Check out</li>
          </ul>
        </div>
      </div>
      <div className="py-3 max-w-[1410px] px-5 mx-auto">
        <div className="flex gap-x-5">
          <div className="basis-3/5">
            <div>
              <p className="text-xl font-bold">Contact</p>
              <div className="flex items-center gap-5 justify-between">
                <div className="mt-5 basis-1/2">
                  <label htmlFor="" className="my-2 inline-block text-[13px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md px-5 py-3 border outline-none focus:border-[#1a40ff] "
                    placeholder="Full Name"
                  />
                </div>
                <div className="mt-5 basis-1/2">
                  <label htmlFor="" className="inline-block text-[13px] my-2">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md px-5 py-3 border outline-none focus:border-[#1a40ff] "
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="mt-1 ">
                <label htmlFor="" className="inline-block text-[13px] my-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full rounded-md px-5 py-3 border outline-none focus:border-[#1a40ff] "
                  placeholder="Phone number"
                />
              </div>
              <p className="my-5 text-[15px] font-bold">Shipping address</p>

              <div className="flex items-center gap-5 justify-between">
                <div className=" basis-1/2">
                  <label htmlFor="" className="my-2 inline-block text-[13px]">
                    Contry/Region
                  </label>
                  <select
                    className="w-full py-3 outline-none px-2 border rounded-md"
                    name=""
                    id=""
                  >
                    <option value="">vietnam</option>
                    <option value="">my</option>
                    <option value="">malay</option>
                  </select>
                </div>
                <div className=" basis-1/2">
                  <label htmlFor="" className="my-2 inline-block text-[13px]">
                    City
                  </label>
                  <select
                    className="w-full py-3 outline-none px-2 border rounded-md"
                    name=""
                    id=""
                  >
                    <option value="">Ho Chi Minh</option>
                    <option value="">my</option>
                    <option value="">malay</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="" className="inline-block text-[13px] my-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full rounded-md px-5 py-3 border outline-none focus:border-[#1a40ff] "
                  placeholder="Adress"
                />
              </div>
              <div className="flex items-center gap-2 mt-5">
                <input type="checkbox" name="pay" id="save" />
                <label htmlFor="save">
                  Save this information for next time
                </label>
              </div>
              <div>
                <p className="font-bold text-[15px] my-4">Payment</p>
                <label
                  htmlFor="pay1"
                  className="inline-block cursor-pointer w-full my-1  border rounded-md px-3 py-3"
                >
                  <input checked type="radio" name="pay" id="pay1" />
                  <span className="ml-3">Payment on delivery</span>
                </label>
                <label
                  htmlFor="pay2"
                  className="inline-block cursor-pointer w-full my-1 border rounded-md px-3 py-3"
                >
                  <input disabled type="radio" name="pay" id="pay2" />
                  <span className="ml-3">Momo</span>
                </label>
                <label
                  htmlFor="pay3"
                  className="inline-block cursor-pointer w-full my-1 border rounded-md px-3 py-3"
                >
                  <input disabled type="radio" name="pay" id="pay3" />
                  <span className="ml-3">Paypal</span>
                </label>
              </div>
              <div className="mt-5 flex justify-between items-center">
                <Link
                  to={"/cart"}
                  className="text-blue-500 flex items-center gap-3"
                >
                  {" "}
                  <AiOutlineArrowLeft /> Return to cart
                </Link>
                <div>
                  <button className="bg-blue-500 text-white px-10 py-2 rounded-md text-xl">
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/5 bg-[#F1F5F6] p-5">
            {cartAr.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-5"
                >
                  <div className="flex relative gap-2 items-center">
                    <div className="w-[90px] relative shrink-0 p-2 rounded-md">
                      <img
                        className="w-full"
                        src={AppURL.ImageUrl + item.image}
                        alt=""
                      />
                      <span className="block text-white text-center absolute top-0 w-5 right-0 h-5 bg-red-500 rounded-full">
                        {item.qty}
                      </span>
                    </div>
                    <h4 className="">{item.name}</h4>
                  </div>

                  <span className="font-bold">${item.total.toFixed(2)}</span>
                </div>
              );
            })}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base">Subtotal : </span>
                <span className="text-base ">${totalCart.toFixed(2)}</span>
              </div>
              <div className="flex my-2 items-center justify-between">
                <span className="font-bold text-base">Discount : </span>
                <span className="text-base ">-{orderAr.coupon}%</span>
              </div>
              <div className="flex my-2 items-center justify-between">
                <span className="font-bold text-base">Shipping : </span>
                <span className="text-base ">Free</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-base">Total : </span>
                <span className="text-xl font-bold text-red-500">
                  ${total?.toFixed(2) || totalCart.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
